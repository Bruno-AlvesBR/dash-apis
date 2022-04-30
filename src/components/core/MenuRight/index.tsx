import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Button } from '@material-ui/core';

import { UseLogin } from '../../../hooks/Login';
import { Configs } from '../Configs';
import { UseUser } from '../../../hooks/User';

import {
  Container,
  Content,
  ContainerUserInfos,
  ContentConfigs,
} from './styles';

export const MenuRight = () => {
  const [{ user, userId }, { setOpenDialog }] = [
    UseUser(),
    UseLogin(),
  ];

  return (
    <>
      <Container>
        <Content>
          <ContentConfigs>
            <HelpOutlineIcon />
            <SettingsOutlinedIcon />
          </ContentConfigs>
          <ContainerUserInfos>
            {userId ? (
              user?.name
            ) : (
              <Button onClick={() => setOpenDialog(true)}>
                Logar
              </Button>
            )}
          </ContainerUserInfos>
        </Content>
      </Container>
      <Configs openDialog={false} />
    </>
  );
};
