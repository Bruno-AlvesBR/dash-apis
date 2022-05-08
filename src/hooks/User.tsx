import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  IUserLogin,
  IUserProps,
} from '../interfaces/IUserProps';
import { userService } from '../services';
import { api } from '../services/api';

export interface IUserContext {
  onsubmit?(event: any): void;
  user?: IUserProps;
  userId?: string;
  noAdmin?: boolean;
  isInvalid?: boolean;
  isLoadingUser?: boolean;
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
  const [user, setUser] = useState<IUserProps>();
  const [userId, setUserId] = useState<string>();
  const [noAdmin, setNoAdmin] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isLoadingUser, setIsLoadingUser] =
    useState<boolean>();

  const onsubmit = useCallback((event: IUserLogin) => {
    try {
      setIsLoadingUser(true);

      const userResponse = setTimeout(async () => {
        const userData = await userService.login({
          email: event?.email,
          password: event?.password,
        });

        if (!userData) return;

        if (!userData?.admin) {
          setNoAdmin(true);
        } else {
          setUserId(userData?.id);
          setUser(userData);
        }

        return () => {
          clearTimeout(userResponse);
          setIsLoadingUser(false);
        };
      }, 3000);
    } catch (err) {
      setIsLoadingUser(false);
      setIsInvalid(true);

      console.log(err);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userName', user?.name?.firstName);
  }, [user?.name]);

  return (
    <UserContext.Provider
      value={{
        onsubmit,
        user,
        noAdmin,
        isInvalid,
        userId,
        isLoadingUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UseUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('Must be implanted userProvider!');
  }

  return context;
};
