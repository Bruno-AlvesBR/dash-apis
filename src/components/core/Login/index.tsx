import { DialogContent } from '@material-ui/core';

import { UseLogin } from '../../../hooks/Login';
import { FormLogin } from '../FormLogin';
import Snackbar from '../Snackbar';
import { UseUser } from '../../../hooks/User';

import { Dialog } from './styles';

export const Login = () => {
  const { openDialog } = UseLogin();
  const { isInvalid, noAdmin } = UseUser();

  return (
    <>
      <Dialog open={openDialog}>
        <DialogContent>
          <FormLogin />
        </DialogContent>
      </Dialog>
      <Snackbar
        setVertical="top"
        setHorizontal="right"
        alert="error"
        message={
          isInvalid
            ? 'Usuário ou senha inválidos'
            : noAdmin &&
              'Usuário não tem permissão para acessar o site'
        }
      />
    </>
  );
};
