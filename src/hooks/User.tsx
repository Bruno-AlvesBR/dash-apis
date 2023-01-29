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
import jwt, { JwtPayload } from 'jsonwebtoken';

import {
  IUserLogin,
  IUserProps,
  TOKEN,
} from '@/interfaces/IUserProps';
import { userService } from '@/services/index';
import { useLogin } from './Login';

export interface IUserContextProps {
  onsubmit?(event: any): void;
  user?: IUserProps;
  userId?: string;
  isInvalid?: boolean;
  isLoadingUser?: boolean;
}

export interface IUserContextProvider {
  children: ReactNode;
}

const UserContext = createContext({} as IUserContextProps);

const UserProvider: React.FC<IUserContextProvider> = ({
  children,
}) => {
  const cookie = new Cookies();
  const { setOpenDialog } = useLogin();

  const [user, setUser] = useState<IUserProps | null>(null);
  const [userId, setUserId] = useState<string>();
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>();

  useMemo(async () => {
    const authToken = await cookie.get(TOKEN.AUTH_TOKEN);
    if (!authToken) return;

    if (jwt) {
      const { _id } = jwt.verify(
        authToken,
        `${process.env.NEXT_PUBLIC_JWT_KEY}`,
      ) as JwtPayload;

      if (_id) {
        setUserId(_id);
        const userResponse = await userService?.recoveryUser(
          `${_id}`,
        );

        if (userResponse) setUser(userResponse as IUserProps);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onsubmit = useCallback(
    async (event: IUserLogin) => {
      try {
        setIsLoadingUser(true);

        const userData: IUserProps = await userService.login({
          email: event?.email,
          password: event?.password,
        });

        if (!userData || !userData?._id) return;

        cookie.set(TOKEN.AUTH_TOKEN, `${userData?.acessToken}`, {
          maxAge: 60 * 60 * 24,
        });
        cookie.set('userName', userData?.name?.firstName || 'Guest');

        setUserId(userData?.id);
        setUser(userData);
        setOpenDialog(false);
      } catch (err) {
        setIsLoadingUser(false);
        setIsInvalid(true);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setOpenDialog],
  );

  return (
    <UserContext.Provider
      value={{
        onsubmit,
        user,
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

export { useUser, UserContext, UserProvider };
