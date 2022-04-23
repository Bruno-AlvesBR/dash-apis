import { Button, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { UseUser } from '../../../hooks/User';

import { FormContent } from './styles';

export const FormLogin = () => {
  const { onsubmit } = UseUser();

  const validationForm = yup.object({
    email: yup
      .string()
      .email()
      .required('O email é obrigatório'),
    password: yup
      .string()
      .required('A senha é obrigatória'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationForm),
  });

  return (
    <FormContent onSubmit={handleSubmit(onsubmit)}>
      <h1 style={{ textAlign: 'center' }}>Login</h1>
      <TextField
        label={errors.email?.message || 'Email'}
        variant="standard"
        name="email"
        {...register('email')}
      />
      <TextField
        label={errors.password?.message || 'Senha'}
        variant="standard"
        name="password"
        type="password"
        {...register('password')}
      />
      <Button variant="contained" type="submit">
        Access
      </Button>
    </FormContent>
  );
};
