import { Button } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';

import { Container } from './styles';

const BannerCreateProduct: React.FC = () => {
  const router = useRouter();

  return (
    <Container data-testid="banner-home">
      <span>Registre um novo produto...</span>
      <Button
        onClick={() => router.push(`${process.env.NEXT_PUBLIC_APP}/dash`)}
      >
        <AddIcon />
      </Button>
    </Container>
  );
};

export default BannerCreateProduct;
