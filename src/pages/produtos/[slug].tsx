import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { IFoodProps } from '../../interfaces/IFoodsProps';
import { foodService } from '../../services';

import { Container } from '../../styles/theme';

interface IProduct {
  food?: IFoodProps;
}

const Product: NextPage<IProduct> = ({ food }) => {
  return (
    <Container>
      {food?.title}
      {food?.description}
    </Container>
  );
};

export default Product;

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
      props: {
        food,
      },
      revalidate: 60 * 60 * 24 * 7,
    };
  } catch (err) {
    console.log(err);

    return {
      props: {
        food: {},
      },
      revalidate: 60 * 60 * 24 * 7,
    };
  }
};
