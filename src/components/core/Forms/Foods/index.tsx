import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as yup from 'yup';

import { useFood } from '../../../../hooks/Food';

import { Container } from './styles';

export const Form = () => {
  const [{ createFood }] = [useFood()];

  const validateForm = yup.object({
    title: yup.string().required('O title é obrigatório!'),
    priceNumber: yup.string().required('A priceNumber é obrigatória!'),
    stock: yup.string().required('A stock é obrigatória!'),
    manufacture: yup.string().required('A manufacture é obrigatória!'),
    slug: yup.string().required('A slug é obrigatória!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateForm),
  });

  return (
    <Container onSubmit={handleSubmit(createFood)}>
      <TextField
        variant="outlined"
        name="title"
        type="text"
        label={errors.title?.message ?? 'Nome'}
        {...register('title')}
      />
      <TextField
        variant="outlined"
        name="description"
        type="text"
        label="Descrição"
        {...register('description')}
      />
      <TextField
        variant="outlined"
        name="category"
        type="text"
        label="Categoria"
        {...register('category')}
      />
      <TextField
        variant="outlined"
        name="priceNumber"
        type="number"
        label={errors.priceNumber?.message ?? 'Preço'}
        {...register('priceNumber')}
      />
      <TextField
        variant="outlined"
        name="month"
        type="number"
        label="Meses de parcelamento"
        {...register('month')}
      />
      <TextField
        variant="outlined"
        name="pricePerMonth"
        type="number"
        label="Preço por mês"
        {...register('pricePerMonth')}
      />
      <TextField
        variant="outlined"
        name="brand"
        type="text"
        label="Marca"
        {...register('brand')}
      />
      <TextField
        variant="outlined"
        name="rating"
        type="number"
        label="Avaliação"
        {...register('rating')}
      />
      <TextField
        variant="outlined"
        name="stock"
        type="number"
        label={errors.stock?.message ?? 'Estoque'}
        {...register('stock')}
      />
      <TextField
        variant="outlined"
        name="manufacture"
        type="text"
        label={errors.manufacture?.message ?? 'Fabricante'}
        {...register('manufacture')}
      />
      <TextField
        variant="outlined"
        name="slug"
        type="text"
        label={errors.slug?.message ?? 'Slug'}
        {...register('slug')}
      />
      <TextField
        variant="outlined"
        name="desktopSrc"
        type="text"
        label="Imagem"
        {...register('desktopSrc')}
      />
      <TextField
        variant="outlined"
        name="mobileSrc"
        type="text"
        label="Thumbnail"
        {...register('mobileSrc')}
      />
      <Switch defaultChecked name="freight" {...register('freight')} />
      <Button variant="contained" type="submit">
        Criar
      </Button>
    </Container>
  );
};
