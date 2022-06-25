import { FormLogin } from '../FormLogin';
import Snackbar from '../Snackbar';
import { useUser } from '@/hooks/User';

import { Container } from './styles';

const Login = () => {
  const [{ isInvalid, noAdmin }] = [useUser()];

  return (
    <Container>
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
