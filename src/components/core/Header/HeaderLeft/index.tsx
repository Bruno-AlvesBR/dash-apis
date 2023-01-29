import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

import { useUser } from '@/hooks/User';
import { TOKEN } from '@/interfaces/IUserProps';
import { useLogin } from '@/hooks/Login';
import ModeButton from '../../ModeButton';

import {
  Container,
  Content,
  ContentUserName,
  ContentConfigs,
} from './styles';

const MenuLeft: React.FC = () => {
  const { user } = useUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cookie = new Cookies();
  const { reload } = useRouter();
  const { setOpenDialog } = useLogin();

  const [userName, setUserName] = useState<string>('');

  const handleLogout = () => {
    cookie.remove(TOKEN.AUTH_TOKEN);
    cookie.remove('userName');

    reload();
  };

  const handleOpenLogin = () => setOpenDialog(true);

  useEffect(() => {
    const name = cookie.get('userName');

    if (name) setUserName(name);
  }, [cookie]);

  return (
    <Container>
      <Content>
        <ContentConfigs>
          <ModeButton />
        </ContentConfigs>

        <ContentUserName>
          {!user?.id && !userName ? (
            <Button onClick={handleOpenLogin}>Logar</Button>
          ) : (
            <>
              <h2>{userName}</h2>
              <Button onClick={() => handleLogout()}>Deslogar</Button>
            </>
          )}
        </ContentUserName>
      </Content>
    </Container>
  );
};

export default MenuLeft;
