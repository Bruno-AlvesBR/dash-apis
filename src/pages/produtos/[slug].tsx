import { GetStaticPaths, GetStaticProps } from 'next';

import { IFoodsSLug } from '../../interfaces/IFoodsProps';
import { api } from '../../services/api';

import { Container } from '../../styles/theme';

export default function ProductContent({
  foods,
}: IFoodsSLug) {
  return (
    <Container>
      {foods?.name}
      {foods?.description}
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { slug } = ctx.params;

  const { data } = await api.get(`foods/${slug}`);

  try {
    const foods = {
      id: data?.id,
      name: data?.name,
      description: data?.description,
      price: data?.price,
      thumbnail: data?.thumbnail,
      category: data?.category,
      brand: data?.brand,
      monthInstallment: data?.monthInstallment,
      quantity: data?.quantity,
      createdAt: data?.createdAt,
      updatedAt: data?.updatedAt,
    };

    return {
      props: {
        foods,
      },
      revalidate: 60 * 60 * 24 * 7,
    };
  } catch (err) {
    console.log(err);

    return {
      props: {
        foods: [],
      },
      revalidate: 60 * 60 * 24 * 7,
    };
  }
};