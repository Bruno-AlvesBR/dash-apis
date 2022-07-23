import { FormLogin } from '../FormLogin';
import Snackbar from '../Snackbar';
import { useUser } from '@/hooks/User';

import { Container } from './styles';
import { useLogin } from '@/hooks/Login';
import { useEffect } from 'react';

const Login = () => {
  const [
    { isInvalid, noAdmin, user },
    { openDialog, setOpenDialog, handleCloseDialog },
  ] = [useUser(), useLogin()];

  useEffect(() => {
    if (user?.id) return setOpenDialog(false);

    setOpenDialog(true);
  }, [setOpenDialog, user?.id]);

  return (
    <Container open={openDialog}>
      <FormLogin />
      <Snackbar
        setVertical="top"
        setHorizontal="right"
        alert="error"
        message={
          isInvalid
            ? 'Usuário ou senha inválidos'
            : noAdmin && 'Usuário não tem permissão para acessar o site'
        }
      />
    </Container>
  );
};

export default Login;
