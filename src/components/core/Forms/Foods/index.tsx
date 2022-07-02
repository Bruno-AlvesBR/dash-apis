import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { memo, useEffect } from 'react';
import { useRouter } from 'next/router';

import { IProductProps } from '@/interfaces/IProductProps';
import { useFood } from '@/hooks/Product';

import { Container } from './styles';

interface IFormProps {
  handleProductSubmit(event: any): void;
  product?: IProductProps;
}

const EForm: React.FC<IFormProps> = ({ handleProductSubmit, product }) => {
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

  const handleRemoveFormStorage = () => {
    localStorage.removeItem('formulario');

    router.reload();
  };

  return (
    <Container onSubmit={handleSubmit(handleProductSubmit)}>
      <TextField
        variant="outlined"
        name="id"
        type="text"
        label="id"
        placeholder="id"
        disabled
        {...register('id')}
      />
      <TextField
        variant="outlined"
        name="title"
        type="text"
        label="Título"
        placeholder={errors.title?.message ?? 'Título'}
        {...register('title')}
      />
      <TextField
        variant="outlined"
        name="description"
        type="text"
        label="Descrição"
        placeholder="Descrição"
        {...register('description')}
      />
      <TextField
        variant="outlined"
        name="category"
        type="text"
        label="Categoria"
        placeholder="Categoria"
        {...register('category')}
      />
      <TextField
        variant="outlined"
        name="priceNumber"
        type="number"
        label="Preço"
        placeholder={errors.priceNumber?.message ?? 'Preço'}
        {...register('priceNumber')}
      />
      <TextField
        variant="outlined"
        name="monthInstallment"
        type="number"
        label="Meses de parcelamento"
        placeholder="Meses de parcelamento"
        {...register('monthInstallment')}
      />
      <TextField
        variant="outlined"
        name="pricePerMonth"
        type="number"
        label="Preço por mês"
        placeholder="Preço por mês"
        {...register('pricePerMonth')}
      />
      <TextField
        variant="outlined"
        name="brand"
        type="text"
        label="Marca"
        placeholder="Marca"
        {...register('brand')}
      />
      <TextField
        variant="outlined"
        name="rating"
        type="number"
        label="Avaliação"
        placeholder="Avaliação"
        {...register('rating')}
      />
      <TextField
        variant="outlined"
        name="stock"
        type="number"
        label="Estoque"
        placeholder={errors.stock?.message ?? 'Estoque'}
        {...register('stock')}
      />
      <TextField
        variant="outlined"
        name="manufacture"
        type="text"
        label="Fabricante"
        placeholder={errors.manufacture?.message ?? 'Fabricante'}
        {...register('manufacture')}
      />
      <TextField
        variant="outlined"
        name="slug"
        type="text"
        label="Slug"
        placeholder={errors.slug?.message ?? 'Slug'}
        {...register('slug')}
      />
      <TextField
        variant="outlined"
        name="desktopSrc"
        type="text"
        label="Imagem"
        placeholder="Imagem"
        {...register('desktopSrc')}
      />
      <TextField
        variant="outlined"
        name="mobileSrc"
        type="text"
        label="Thumbnail"
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
          <>
            <Button variant="contained" type="submit">
              Criar
            </Button>
            <Button onClick={() => handleRemoveFormStorage()}>Voltar</Button>
          </>
        )}
      </span>
    </Container>
  );
};

export default memo(EForm);
