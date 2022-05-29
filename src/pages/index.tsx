import { GetStaticProps, NextPage } from 'next';

import { LoggedHome } from '../components/pages/Home/LoggedHome';
import { useUser } from '../hooks/User';
import { IFoodProps, IFoods } from '../interfaces/IFoodsProps';
import { foodService } from '../services';
import Login from '../components/core/Login';

const Index: NextPage<IFoods> = ({ foods }) => {
  const { userId } = useUser();

  return <>{!userId ? <Login /> : <LoggedHome />}</>;
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const foods: IFoodProps[] = await foodService?.findAll();

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
