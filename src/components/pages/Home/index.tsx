import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { ContainerApresentation, Title, Description } from './styles';
import { Container } from '../../../styles/theme';

export const Home = () => {
  const router = useRouter();

  const handleRedirect = useMemo(() => {
    return () => {
      router.push('https://ecommerce-foods.vercel.app');
    };
  }, [router]);

  return (
    <Container>
      <ContainerApresentation>
        <Title variant="h1">Dashboard para gerenciamento da api.</Title>
        <Description variant="h3">
          Projeto usado para gerenciar o site de e-commerce de alimentos{' '}
          <span onClick={handleRedirect}>(e-foods)</span>
        </Description>
      </ContainerApresentation>
    </Container>
  );
};
