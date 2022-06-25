import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import Cookies from 'universal-cookie';

import { IUserLogin, IUserProps, TOKEN } from '@/interfaces/IUserProps';
import { userService } from '@/services/index';

export interface IUserContextProps {
  onsubmit?(event: any): void;
  user?: IUserProps;
  userId?: string;
  noAdmin?: boolean;
  isInvalid?: boolean;
  isLoadingUser?: boolean;
}

export interface IUserContextProvider {
  children: ReactNode;
}

const UserContext = createContext({} as IUserContextProps);

const UserProvider = ({ children }: IUserContextProvider) => {
  const [user, setUser] = useState<IUserProps | null>(null);
  const [userId, setUserId] = useState<string>();
  const [noAdmin, setNoAdmin] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>();

  const cookie = new Cookies();

  const userLoadService = useCallback(async () => {
    const authToken = cookie.get(TOKEN.AUTH_TOKEN);

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

        cookie.set(TOKEN.AUTH_TOKEN, `${userData?.id}`, {
          maxAge: 60 * 60 * 24,
        });

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

function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('Must be implanted userProvider!');
  }

  return context;
}

export { useUser, UserProvider };
