import Form from '../../components/core/Forms/Foods';
import { useFood } from '../../hooks/Product';
import { CardContent } from '../../components/core/CardContent';

import { Container } from '../../styles/theme';

const Dash: React.FC = () => {
  const { productData, handleCreateProduct } = useFood();

  return (
    <Container>
      <Form handleProductSubmit={handleCreateProduct} />
      <h1>Último produto adicionado</h1>
      {productData && (
        <CardContent
          id={productData?.id}
          title={productData?.title}
          description={productData?.description}
          desktopSrc={productData?.image?.desktopSrc}
          brand={productData?.brand}
        />
      )}
    </Container>
  );
};

export default Dash;
