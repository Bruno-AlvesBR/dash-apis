import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { Configs } from '../Configs';
import { UseUser } from '../../../hooks/User';

import {
  Container,
  Content,
  ContainerUserInfos,
  ContentConfigs,
} from './styles';

const MenuLeft = () => {
  const [{ user }] = [UseUser()];

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
          </ContainerUserInfos>
        </Content>
      </Container>
      <Configs openDialog={false} />
    </>
  );
};

export default MenuLeft;
