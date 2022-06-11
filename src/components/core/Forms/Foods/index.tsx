import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as yup from 'yup';
import { memo, useEffect } from 'react';
import { useRouter } from 'next/router';

import { IProductProps } from '../../../../interfaces/IProductProps';
import { useFood } from '../../../../hooks/Food';

import { Container } from './styles';

interface IFormProps {
  handleProductSubmit(event: any): void;
  product?: IProductProps;
}

const Form: React.FC<IFormProps> = ({ handleProductSubmit, product }) => {
  const [{ handleRemoveProduct }, router] = [useFood(), useRouter()];

  const validateForm = yup.object({
    title: yup.string().required('O título é obrigatório!'),
    priceNumber: yup.string().required('O preço é obrigatória!'),
    stock: yup
      .string()
      .required('A quantidade de itens em estoque é obrigatório!'),
    manufacture: yup.string().required('O fabricante é obrigatório!'),
    slug: yup.string().required('A slug do produto é obrigatória!'),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateForm),
  });

  useEffect(() => {
    if (setValue && product) {
      setValue('id', product?.id);
      setValue('title', product?.title);
      setValue('description', product?.description);
      setValue('brand', product?.brand);
      setValue('category', product?.category);
      setValue('freight', product?.freight);
      setValue('desktopSrc', product?.image?.desktopSrc);
      setValue('mobileSrc', product?.image?.mobileSrc);
      setValue('manufacture', product?.manufacture);
      setValue('priceNumber', product?.price?.priceNumber);
      setValue(
        'monthInstallment',
        product?.price?.installment?.monthInstallment,
      );
      setValue('pricePerMonth', product?.price?.installment?.pricePerMonth);
      setValue('rating', product?.rating);
      setValue('slug', product?.slug);
      setValue('stock', product?.stock);
    }
  }, [product, setValue]);

  return (
    <Container onSubmit={handleSubmit(handleProductSubmit)}>
      <TextField
        variant="outlined"
        name="id"
        type="text"
        placeholder="id"
        disabled
        {...register('id')}
      />
      <TextField
        variant="outlined"
        name="title"
        type="text"
        placeholder={errors.title?.message ?? 'Nome'}
        {...register('title')}
      />
      <TextField
        variant="outlined"
        name="description"
        type="text"
        placeholder="Descrição"
        {...register('description')}
      />
      <TextField
        variant="outlined"
        name="category"
        type="text"
        placeholder="Categoria"
        {...register('category')}
      />
      <TextField
        variant="outlined"
        name="priceNumber"
        type="number"
        placeholder={errors.priceNumber?.message ?? 'Preço'}
        {...register('priceNumber')}
      />
      <TextField
        variant="outlined"
        name="monthInstallment"
        type="number"
        placeholder="Meses de parcelamento"
        {...register('monthInstallment')}
      />
      <TextField
        variant="outlined"
        name="pricePerMonth"
        type="number"
        placeholder="Preço por mês"
        {...register('pricePerMonth')}
      />
      <TextField
        variant="outlined"
        name="brand"
        type="text"
        placeholder="Marca"
        {...register('brand')}
      />
      <TextField
        variant="outlined"
        name="rating"
        type="number"
        placeholder="Avaliação"
        {...register('rating')}
      />
      <TextField
        variant="outlined"
        name="stock"
        type="number"
        placeholder={errors.stock?.message ?? 'Estoque'}
        {...register('stock')}
      />
      <TextField
        variant="outlined"
        name="manufacture"
        type="text"
        placeholder={errors.manufacture?.message ?? 'Fabricante'}
        {...register('manufacture')}
      />
      <TextField
        variant="outlined"
        name="slug"
        type="text"
        placeholder={errors.slug?.message ?? 'Slug'}
        {...register('slug')}
      />
      <TextField
        variant="outlined"
        name="desktopSrc"
        type="text"
        placeholder="Imagem"
        {...register('desktopSrc')}
      />
      <TextField
        variant="outlined"
        name="mobileSrc"
        type="text"
        placeholder="Thumbnail"
        {...register('mobileSrc')}
      />
      <Switch defaultChecked name="freight" {...register('freight')} />

      <span style={{ display: 'flex', flexDirection: 'row' }}>
        {router.pathname.includes('/produtos/') ? (
          <>
            <Button variant="contained" type="submit">
              Atualizar
            </Button>
            <Button
              variant="contained"
              onClick={() => handleRemoveProduct(product?.id)}
              style={{ marginLeft: 20 }}
            >
              Remover
            </Button>
          </>
        ) : (
          <Button variant="contained" type="submit">
            Criar
          </Button>
        )}
      </span>
    </Container>
  );
};

export default memo(Form);
