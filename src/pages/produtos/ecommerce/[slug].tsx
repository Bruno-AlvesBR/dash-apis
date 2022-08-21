import { IFoodProps } from '@/interfaces/IFoodsProps';
import { foodService } from '@/services/index';
import { Container } from '@/styles/theme';
import { GetServerSideProps, NextPage } from 'next';
import DynamicFoodForm from '@/components/core/Forms/Foods/dynamic';
import HeadPage from '@/components/core/Head';
import { useFood } from '@/hooks/Product';

interface IProductSlugProps {
  food?: IFoodProps;
}

const Ecommerce: NextPage<IProductSlugProps> = ({ food }) => {
  const { handleUpdateProduct } = useFood();

  return (
    <Container>
      <HeadPage title="E-commerce" />
      <DynamicFoodForm
        handleProductSubmit={handleUpdateProduct}
        product={food}
      />
    </Container>
  );
};

export default Ecommerce;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { slug } = ctx.params;

  try {
    const food = await foodService.findBySlug(slug);

    return {
      props: { food },
    };
  } catch (err) {
    console.log(err);

    return {
      props: { food: {} },
    };
  }
};
