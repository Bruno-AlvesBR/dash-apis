import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button';

import { Configs } from '../Configs';
import { useUser } from '../../../hooks/User';
import { TOKEN } from '../../../interfaces/IUserProps';

import {
  Container,
  Content,
  ContainerUserInfos,
  ContentConfigs,
} from './styles';

const MenuLeft = () => {
  const [{ user }, cookie, router] = [useUser(), new Cookies(), useRouter()];

  const handleLogout = () => {
    cookie.remove(TOKEN.AUTH_TOKEN);
    router.reload();
  };

  return (
    <>
      <Container>
        <Content>
          <ContentConfigs>
            <HelpOutlineIcon />
            <SettingsOutlinedIcon />
          </ContentConfigs>
          <ContainerUserInfos>
            <h2>{user?.name?.firstName}</h2>
            <Button onClick={() => handleLogout()}>Deslogar</Button>
          </ContainerUserInfos>
        </Content>
      </Container>
      <Configs openDialog={false} />
    </>
  );
};

export default MenuLeft;
