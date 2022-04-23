import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useState } from 'react';

import { Configs } from '../Configs';
import { UseUser } from '../../../hooks/User';

import {
  Container,
  Content,
  ContainerUserInfos,
  ContentConfigs,
} from './styles';

export const MenuRight = () => {
  const { user, userId } = UseUser();
  const [openDialog, setOpenDialog] = useState(false);

  const handleClose = () => setOpenDialog(false);

  return (
    <>
      <Container>
        <Content>
          <ContentConfigs>
            <HelpOutlineIcon />
            <SettingsOutlinedIcon
              onClick={() => setOpenDialog(true)}
            />
          </ContentConfigs>
          <ContainerUserInfos>
            {userId && user && user?.name}
          </ContainerUserInfos>
        </Content>
      </Container>
      <Configs
        openDialog={openDialog}
        onClose={handleClose}
      />
    </>
  );
};
