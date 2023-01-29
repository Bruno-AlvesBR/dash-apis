import AddIcon from '@mui/icons-material/Add';

import { Container, LinkButton } from './styles';

const BannerCreateProduct: React.FC = () => (
  <Container data-testid="banner-home">
    <p>Registre um novo produto...</p>

    <LinkButton
      passHref
      data-testid="banner-home-button"
      href="/dash"
    >
      <AddIcon />
    </LinkButton>
  </Container>
);

export default BannerCreateProduct;
