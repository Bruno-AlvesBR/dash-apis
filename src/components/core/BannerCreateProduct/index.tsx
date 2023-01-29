import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';

import { Link } from '@/components/ui/Link';

import { Container } from './styles';

const BannerCreateProduct: React.FC = () => {
  const router = useRouter();

  return (
    <Container data-testid="banner-home">
      <span>Registre um novo produto...</span>
      <Link data-testid="banner-home-button" href="/dash">
        <AddIcon />
      </Link>
    </Container>
  );
};

export default BannerCreateProduct;
