import { Form } from '../../components/core/Forms/Foods';
import { useFood } from '../../hooks/Food';
import { CardContent } from '../../components/core/CardContent';

import { Container } from '../../styles/theme';

const Dash: React.FC = () => {
  const { productData } = useFood();

  return (
    <Container>
      <Form />
      <h1>Último produto adicionado</h1>
      {productData && (
        <CardContent
          id={productData?.id}
          title={productData?.title}
          description={productData?.description}
          price={productData?.price}
          image={productData?.image}
          brand={productData?.brand}
        />
      )}
    </Container>
  );
};

export default Dash;
