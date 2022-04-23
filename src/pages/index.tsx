import { GetStaticProps, NextPage } from 'next';

import { Home as LoggedHome } from '../components/pages/Home';
import { IFoods } from '../interfaces/IFoodsProps';
import { api } from '../services/api';

const index: NextPage<IFoods> = ({ foods }) => {
  return (
    <>
      <LoggedHome />
    </>
  );
};

export default index;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/foods');

  try {
    const foods = data?.map(foods => {
      return {
        id: foods?.id,
        name: foods?.name,
        description: foods?.description,
        price: foods?.price,
        thumbnail: foods?.thumbnail,
        category: foods?.category,
        brand: foods?.brand,
        monthInstallment: foods?.monthInstallment,
        quantity: foods?.quantity,
        createdAt: foods?.createdAt,
        updatedAt: foods?.updatedAt,
      };
    });
  
    return {
      props: {
        foods,
      },
      revalidate: 60 * 60 * 24,
    };
  } catch (err) {
    console.log(err);

    return {
      props: {
        foods: [],
      },
      revalidate: 60 * 60 * 24,
    };
  }
};
