import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Cookies from 'universal-cookie';

import { IUserLogin, IUserProps } from '../interfaces/IUserProps';
import { userService } from '../services';

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

export const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: IUserContextProps) => {
  const [user, setUser] = useState<IUserProps | null>(null);
  const [userId, setUserId] = useState<string>();
  const [noAdmin, setNoAdmin] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>();

  const cookie = new Cookies();

  const userLoadService = useCallback(async () => {
    const authToken = cookie.get('authUserId');

    if (!authToken) return;

    setUserId(authToken);
    const userResponse = await userService?.recoveryUser(`${authToken}`);

    if (userResponse) {
      setUser(userResponse);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    userLoadService();
  }, [userLoadService]);

  const onsubmit = useCallback(
    async (event: IUserLogin) => {
      try {
        setIsLoadingUser(true);

        const userData = await userService.login({
          email: event?.email,
          password: event?.password,
        });

        cookie.set('authUserId', `${userData?.id}`, { maxAge: 60 * 60 * 24 });

        if (!userData) return;

        if (!userData?.admin) {
          setNoAdmin(true);
        } else {
          setUserId(userData?.id);
          setUser(userData);
        }
      } catch (err) {
        setIsLoadingUser(false);
        setIsInvalid(true);

        console.log(err);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user?.id],
  );

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
