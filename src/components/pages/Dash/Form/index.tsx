import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@material-ui/core';
import * as yup from 'yup';

import { UseFood } from '../../../../hooks/Food';

import { Container, BoxInputs } from './styles';

export const Form = () => {
  const validateForm = yup.object({
    name: yup.string().required('O nome é obrigatório!'),
    description: yup
      .string()
      .required('A descrição é obrigatória!'),
    price: yup.string().required('O preço é obrigatório!'),
    thumbnail: yup
      .string()
      .required('A thumbnail é obrigatória!'),
    category: yup
      .string()
      .required('A categoria é obrigatória!'),
    brand: yup.string().required('A marca é obrigatória!'),
    monthInstallment: yup
      .string()
      .required('Os meses de parcelamento é obrigatório!'),
    quantity: yup
      .string()
      .required('A quantidade é obrigatória!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateForm),
  });

  const { onsubmit } = UseFood();

  return (
    <Container onSubmit={handleSubmit(onsubmit)}>
      <BoxInputs>
        <TextField
          variant="outlined"
          name="name"
          type="text"
          label={errors.name?.message || 'Nome'}
          {...register('name')}
        />
        <TextField
          variant="outlined"
          name="description"
          type="text"
          label={errors.description?.message || 'Descrição'}
          {...register('description')}
        />
      </BoxInputs>
      <BoxInputs>
        <TextField
          variant="outlined"
          name="price"
          type="number"
          label={errors.price?.message || 'Price'}
          {...register('price')}
        />
        <TextField
          variant="outlined"
          name="thumbnail"
          type="text"
          label={errors.thumbnail?.message || 'Thumbnail'}
          {...register('thumbnail')}
        />
      </BoxInputs>
      <BoxInputs>
        <TextField
          variant="outlined"
          name="category"
          type="text"
          label={errors.category?.message || 'Categoria'}
          {...register('category')}
        />
        <TextField
          variant="outlined"
          name="brand"
          type="text"
          label={errors.brand?.message || 'Marca'}
          {...register('brand')}
        />
      </BoxInputs>
      <BoxInputs>
        <TextField
          variant="outlined"
          name="monthInstallment"
          type="number"
          label={
            errors.monthInstallment?.message ||
            'Parcelamento (meses)'
          }
          {...register('monthInstallment')}
        />
        <TextField
          variant="outlined"
          name="quantity"
          type="number"
          label={errors.quantity?.message || 'Quantidade'}
          {...register('quantity')}
        />
      </BoxInputs>

      <Button variant="contained" type="submit">
        Postar
      </Button>
    </Container>
  );
};
