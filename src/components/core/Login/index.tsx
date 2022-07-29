import { FormLogin } from '../FormLogin';
import Snackbar from '../Snackbar';
import { useUser } from '@/hooks/User';
import { useLogin } from '@/hooks/Login';

import { Container } from './styles';

const Login: React.FC = () => {
  const [{ isInvalid, noAdmin }, { openDialog }] = [useUser(), useLogin()];

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
