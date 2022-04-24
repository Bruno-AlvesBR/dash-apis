import { IUser } from '../../../../interfaces/IUserProps';

import {
  ContainerApresentation,
  Title,
  Description,
} from './styles';
import { Container } from '../../../../styles/theme';

export const LoggedHome = ({ user }: IUser) => {
  const handleRedirect = () => {
    window.open(
      process.env.NEXT_PUBLIC_URL_FOODS,
      '_blank',
    );
  };

  return (
    <Container>
      <ContainerApresentation>
        <Title variant="h1">
          Dashboard para gerenciamento da api.
        </Title>
        <Description variant="h3">
          Projeto usado para gerenciar o site de e-commerce
          de alimentos{' '}
          <span onClick={handleRedirect}>(e-foods)</span>
        </Description>
      </ContainerApresentation>
    </Container>
  );
};