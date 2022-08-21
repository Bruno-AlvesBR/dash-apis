import BannerCreateProduct from '@/components/core/BannerCreateProduct';
import HeadPage from '@/components/core/Head';

import { ContainerApresentation, Title, Description } from './styles';
import { Container } from '@/styles/theme';

export const LoggedHome: React.FC = () => {
  const handleRedirect = () =>
    window.open(process.env.NEXT_PUBLIC_URL_FOODS, '_blank');

  return (
    <Container>
      <HeadPage />
      <ContainerApresentation>
        <Title variant="h1">
          Dashboard para gerenciamento da api.
        </Title>
        <Description variant="h3">
          Projeto usado para gerenciar o site de e-commerce de
          alimentos <span onClick={handleRedirect}>(e-foods)</span>
        </Description>
      </ContainerApresentation>
      <BannerCreateProduct />
    </Container>
  );
};
