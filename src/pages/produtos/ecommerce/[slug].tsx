import { IFoodProps } from '@/interfaces/IFoodsProps';
import { foodService } from '@/services/index';
import { Container } from '@/styles/theme';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import DynamicFoodForm from '@/components/core/Forms/Foods/dynamic';
import { useFood } from '@/hooks/Product';

interface IProductSlugProps {
  food?: IFoodProps;
}

const Ecommerce: NextPage<IProductSlugProps> = ({ food }) => {
  const { handleUpdateProduct } = useFood();

  return (
    <Container>
      <DynamicFoodForm
        handleProductSubmit={handleUpdateProduct}
        product={food}
      />
    </Container>
  );
};

export default Ecommerce;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { slug } = ctx.params;

  try {
    const food = await foodService.findBySlug(slug);

    return {
      props: { food },
      revalidate: false,
    };
  } catch (err) {
    console.log(err);

    return {
      props: {
        food: {},
      },
      revalidate: false,
    };
  }
};
