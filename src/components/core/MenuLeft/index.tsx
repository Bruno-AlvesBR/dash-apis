import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Cookies from 'universal-cookie';
import Router from 'next/router';
import Button from '@material-ui/core/Button';

import { Configs } from '../Configs';
import { UseUser } from '../../../hooks/User';

import {
  Container,
  Content,
  ContainerUserInfos,
  ContentConfigs,
} from './styles';

const MenuLeft = () => {
  const [{ user }, cookie] = [UseUser(), new Cookies()];

  const handleLogout = () => {
    cookie.remove('authUserId');
    Router.reload();
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
