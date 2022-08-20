import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import { memo, useEffect, useMemo, useState } from 'react';
import Switch from '@mui/material/Switch';

import { Configs } from '../../Configs';
import { useUser } from '@/hooks/User';
import { TOKEN } from '@/interfaces/IUserProps';
import { useLogin } from '@/hooks/Login';
import { useThemeMode } from '@/hooks/theme';

import {
  Container,
  Content,
  ContentUserName,
  ContentConfigs,
} from './styles';

const MenuLeft: React.FC = () => {
  const [{ user }, cookie, router, { setOpenDialog }] = [
    useUser(),
    new Cookies(),
    useRouter(),
    useLogin(),
  ];
  const { toggleColorMode } = useThemeMode();

  const [checked, setChecked] = useState(false);

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

  const handleToggleMode = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    localStorage.setItem('isDark', `${event.target.checked}`);
    setChecked(event.target.checked);
    toggleColorMode();
  };

  useEffect(() => {
    const mode = localStorage.getItem('isDark');

    if (mode) {
      setChecked(mode === 'true' ? true : false);
      toggleColorMode();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleColorMode]);

  return (
    <>
      <Container>
        <Content>
          <ContentConfigs>
            <Switch checked={checked} onChange={handleToggleMode} />
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

export default memo(MenuLeft);
