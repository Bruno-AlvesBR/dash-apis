import { GetStaticProps, NextPage } from 'next';
import { memo } from 'react';
import { BlockedContent } from '../../components/core/BlockedContent';

import { CardContent } from '../../components/core/CardContent';
import { UseUser } from '../../hooks/User';
import { IFoods } from '../../interfaces/IFoodsProps';
import { api } from '../../services/api';

import Container from './styles';

const todos: NextPage<IFoods> = ({ foods }) => {
  const { userId } = UseUser();

  return (
    <Container>
      {!userId
        ? foods?.map(food => (
            <BlockedContent
              key={food?.id}
              message="Blocked content"
            >
              <CardContent
                id={food?.id}
                name={food?.name}
                description={food?.description}
                price={food?.price}
                thumbnail={food?.thumbnail}
                brand={food?.brand}
              />
            </BlockedContent>
          ))
        : foods?.map(food => (
            <CardContent
              key={food?.id}
              id={food?.id}
              name={food?.name}
              description={food?.description}
              price={food?.price}
              thumbnail={food?.thumbnail}
              brand={food?.brand}
            />
          ))}
    </Container>
  );
};

export default memo(todos);

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/foods', {
    params: {
      _limit: 20,
      _sort: 'updatedAt',
      _order: 'desc',
    },
  });

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
