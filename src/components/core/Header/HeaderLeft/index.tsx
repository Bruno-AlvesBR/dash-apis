import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';

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
  const cookie = new Cookies();
  const { reload } = useRouter();
  const { setOpenDialog } = useLogin();

  const handleLogout = () => {
    cookie.remove(TOKEN.AUTH_TOKEN);
    cookie.remove('userName');

    if (!cookie.get(TOKEN.AUTH_TOKEN)) reload();
  };

  const handleOpenLogin = () => setOpenDialog(true);

  return (
    <Container>
      <Content>
        <ContentConfigs>
          <ModeButton />
        </ContentConfigs>

        <ContentUserName>
          {!user?.id ? (
            <Button onClick={handleOpenLogin}>Logar</Button>
          ) : (
            <>
              <h2>{user?.name?.firstName}</h2>
              <Button onClick={() => handleLogout()}>Deslogar</Button>
            </>
          )}
        </ContentUserName>
      </Content>
    </Container>
  );
};

export default MenuLeft;
