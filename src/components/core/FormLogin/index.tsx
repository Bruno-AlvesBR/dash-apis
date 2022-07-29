import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRef } from 'react';

import { useUser } from '@/hooks/User';

import { ButtonForm, FormContent, InputForm } from './styles';

export const FormLogin = () => {
  const { onsubmit, isLoadingUser } = useUser();

  const buttonRef = useRef<HTMLButtonElement>(null);

  const validationForm = yup.object({
    email: yup.string().email().required('O email é obrigatório'),
    password: yup.string().required('A senha é obrigatória'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationForm),
  });

  const handleEventKey = (event: any) => {
    if (event !== 'Enter') return;

    buttonRef.current.click();
  };

  return (
    <FormContent data-testid="form-content" onSubmit={handleSubmit(onsubmit)}>
      <h1 style={{ textAlign: 'center' }}>Login</h1>

      <Box mb={4} mt={4}>
        <InputForm
          label={errors.email?.message || 'Email'}
          variant="standard"
          name="email"
          {...register('email')}
          error={errors.email?.message}
          onKeyDown={handleEventKey}
        />
      </Box>
      <Box mb={5}>
        <InputForm
          label={errors.password?.message || 'Senha'}
          variant="standard"
          name="password"
          type="password"
          {...register('password')}
          error={errors.password?.message}
          onKeyDown={handleEventKey}
        />
      </Box>

      {isLoadingUser ? (
        <CircularProgress style={{ margin: 'auto' }} />
      ) : (
        <ButtonForm ref={buttonRef} variant="contained" type="submit">
          Access
        </ButtonForm>
      )}
    </FormContent>
  );
};
