import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';

import { Configs } from '../../Configs';
import { useUser } from '@/hooks/User';
import { TOKEN } from '@/interfaces/IUserProps';

import { Container, Content, ContentUserName, ContentConfigs } from './styles';
import { useMemo } from 'react';
import { useLogin } from '@/hooks/Login';
import { Button } from '@mui/material';

const MenuLeft = () => {
  const [{ user }, cookie, router, { setOpenDialog }] = [
    useUser(),
    new Cookies(),
    useRouter(),
    useLogin(),
  ];

  const handleLogout = () => {
    cookie.remove(TOKEN.AUTH_TOKEN);

    if (!cookie.get(TOKEN.AUTH_TOKEN)) {
      router.reload();
    }
  };

  const handleOpenLogin = () => setOpenDialog(true);

  const loggedButtonComponent = useMemo(
    () => (
      <>
        <h2>{user?.name?.firstName}</h2>
        <Button onClick={() => handleLogout()}>Deslogar</Button>
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user],
  );

  return (
    <>
      <Container>
        <Content>
          <ContentConfigs>
            <HelpOutlineIcon />
            <SettingsOutlinedIcon />
          </ContentConfigs>

          <ContentUserName>
            {!user?.id ? (
              <Button onClick={handleOpenLogin}>Logar</Button>
            ) : (
              loggedButtonComponent
            )}
          </ContentUserName>
        </Content>
      </Container>
      <Configs openDialog={false} />
    </>
  );
};

export default MenuLeft;
