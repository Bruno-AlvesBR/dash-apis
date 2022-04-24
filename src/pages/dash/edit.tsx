import { Form } from '../../components/pages/Dash/Form';
import { UseFood } from '../../hooks/Food';
import { CardContent } from '../../components/core/CardContent';

import { UseUser } from '../../hooks/User';
import { BlockedContent } from '../../components/core/BlockedContent';

import { Container } from '../../styles/theme';

const index: React.FC = () => {
  const { productData } = UseFood();
  const { userId } = UseUser();

  return (
    <Container>
      {!userId ? (
        <BlockedContent message="Usuário bloqueado de acessar este conteúdo">
          <Form />
        </BlockedContent>
      ) : (
        <Form />
      )}
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
