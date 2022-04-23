import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

import { IUserProps } from '../interfaces/IUserProps';
import { api } from '../services/api';

export interface IUserContext {
  onsubmit?(event: any): void;
  user: IUserProps;
  userId: string;
  noAdmin: boolean;
  isInvalid: boolean;
}

export interface IUserContextProps {
  children: ReactNode;
}

export const UserContext = createContext(
  {} as IUserContext,
);

export const UserContextProvider = ({
  children,
}: IUserContextProps) => {
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();
  const [noAdmin, setNoAdmin] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const onsubmit = useCallback(async event => {
    try {
      const { data } = await api.post('/user/login', {
        email: event?.email,
        password: event?.password,
      });

      if (!data) return;

      if (!data?.admin) {
        setNoAdmin(true);
      } else {
        setUserId(data?.id);
        setUser(data);
      }
    } catch (err) {
      console.log(err);
      setIsInvalid(true);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        onsubmit,
        user,
        noAdmin,
        isInvalid,
        userId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UseUser = () => {
  const context = useContext(UserContext);

  return context;
};
