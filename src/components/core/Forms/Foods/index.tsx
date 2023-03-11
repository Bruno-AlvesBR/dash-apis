import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';

import { IProductProps } from '@/interfaces/IProductProps';
import { productFormList } from '../Lists/product';
import { useFood } from '@/hooks/Product';
import { useUser } from '@/hooks/User';

import { Container, ContentImages } from '../styles';

interface IFormProps {
  handleProductSubmit(event: any): void;
  product?: IProductProps;
}

const EForm: React.FC<IFormProps> = ({
  handleProductSubmit,
  product,
}) => {
  const { handleRemoveProduct, isPromotion, setIsPromotion } =
    useFood();
  const router = useRouter();
  const { user } = useUser();

  const [fieldQuantity, setFieldQuantity] = useState(
    product?.images?.length || 0,
  );
  const [imagesField, setImagesField] = useState(
    product?.images?.length > 0
      ? product?.images?.map((_, index) => `image-${index}`)
      : ['image-1'],
  );

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
      setIsPromotion(product?.isPromotion);

      productFormList.map(item => {
        const altPrices =
          item?.alternativePaths?.second &&
          product[item?.alternativePaths?.first][
            item?.alternativePaths?.second
          ][item?.label];

        const altInstallments =
          item?.alternativePaths?.first &&
          product[item?.alternativePaths?.first][item?.label];

        const productAttribute =
          item?.alternativePaths && item?.alternativePaths?.first
            ? altPrices || altInstallments
            : product[item?.label];

        setValue(item.label, productAttribute);
      });
      setValue('isPromotion', product.isPromotion);
      setValue('discountPercentage', product.discountPercentage);

      imagesField.map((image, index) => {
        setValue(image, product.images[index]);
      });
    }
  }, [product, setIsPromotion, setValue, imagesField, fieldQuantity]);

  const handleRemoveFormStorage = () => {
    localStorage.removeItem('formulario');

    router.reload();
  };

  const handleAddNewField = () => {
    setFieldQuantity(fieldQuantity + 1);

    setImagesField([...imagesField, `image-${fieldQuantity}`]);
  };

  const handleRemoveNewField = () => {
    setFieldQuantity(fieldQuantity - 1);

    const removedLastField = imagesField.pop();
    const filtteredFields = imagesField.filter(
      item => item !== removedLastField,
    );

    setImagesField(filtteredFields);
  };

  return (
    <Container onSubmit={handleSubmit(handleProductSubmit)}>
      {productFormList.map((item, index) => (
        <TextField
          key={index}
          variant="outlined"
          name={item?.label}
          type={item?.fieldType}
          label={errors[item?.label]?.message ?? item?.title}
          placeholder={item?.title}
          disabled={item?.disabled}
          error={!!errors[item?.label]?.message}
          fullWidth
          {...register(item?.label)}
        />
      ))}

      <Box display="flex" alignItems="center">
        <p>Tem alguma promoção?</p>
        <Switch
          name="isPromotion"
          type="checkbox"
          onChange={event => setIsPromotion(event.target.checked)}
          {...(!!isPromotion &&
            product?.isPromotion && {
              checked: product?.isPromotion,
            })}
        />
      </Box>
      {isPromotion && (
        <TextField
          variant="outlined"
          name="discountPercentage"
          type="number"
          label="Porcentagem de desconto"
          placeholder="Porcentagem de desconto"
          {...register('discountPercentage')}
        />
      )}

      <ContentImages>
        {imagesField?.map(image => (
          <TextField
            key={image}
            variant="outlined"
            name={image}
            type="text"
            label="Imagem"
            placeholder="Imagem"
            fullWidth
            {...register(image)}
          />
        ))}

        <Button type="button" onClick={handleRemoveNewField}>
          -
        </Button>
        <Button type="button" onClick={handleAddNewField}>
          +
        </Button>
      </ContentImages>

      <span style={{ display: 'flex', flexDirection: 'row' }}>
        {router.pathname.includes('/produtos/') ? (
          <>
            <Button
              variant="contained"
              type="submit"
              disabled={!user?.admin}
            >
              Atualizar
            </Button>
            <Button
              variant="contained"
              onClick={() => handleRemoveProduct(product?.id)}
              style={{ marginLeft: 20 }}
              disabled={!user?.admin}
            >
              Remover
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="contained"
              type="submit"
              disabled={!user?.admin}
            >
              Criar
            </Button>
            <Button onClick={() => handleRemoveFormStorage()}>
              Voltar
            </Button>
          </>
        )}
      </span>
    </Container>
  );
};

export default EForm;
