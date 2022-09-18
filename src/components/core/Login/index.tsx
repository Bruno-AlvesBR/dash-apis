import { FormLogin } from '../FormLogin';
import Snackbar from '../Snackbar';
import { useUser } from '@/hooks/User';
import { useLogin } from '@/hooks/Login';

import { Container } from './styles';

const Login: React.FC = () => {
  const { isInvalid } = useUser();
  const { openDialog } = useLogin();

  return (
    <Container open={openDialog}>
      <FormLogin />
      <Snackbar
        setVertical="top"
        setHorizontal="right"
        alert="error"
        message={isInvalid && 'Usuário ou senha inválidos'}
      />
    </Container>
  );
};

export default Login;
