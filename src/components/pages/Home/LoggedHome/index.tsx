import BannerCreateProduct from '@/components/core/BannerCreateProduct';
import { Link } from '@/components/ui/Link';

import { ContainerApresentation, Title, Description } from './styles';
import { Container } from '@/styles/theme';

export const LoggedHome: React.FC = () => (
  <Container>
    <ContainerApresentation>
      <Title variant="h1">Dashboard para gerenciamento da api.</Title>

      <Description variant="h3">
        Projeto usado para gerenciar o site de e-commerce de alimentos{' '}
        <Link href={process.env.NEXT_PUBLIC_ECOMMERCE_URL}>
          (e-foods)
        </Link>
      </Description>
    </ContainerApresentation>
    <BannerCreateProduct />
  </Container>
);
