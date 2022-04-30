import { Form } from '../../components/pages/Dash/Form';
import { UseFood } from '../../hooks/Food';
import { CardContent } from '../../components/core/CardContent';

import { Container } from '../../styles/theme';

const index: React.FC = () => {
  const { productData } = UseFood();

  return (
    <Container>
      <Form />
      <h1>Último produto adicionado</h1>
      {productData && (
        <CardContent
          id={productData?.id}
          name={productData?.name}
          description={productData?.description}
          price={productData?.price}
          thumbnail={productData?.thumbnail}
          brand={productData?.brand}
        />
      )}
    </Container>
  );
};

export default index;
