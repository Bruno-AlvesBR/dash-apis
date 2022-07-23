import { GetStaticProps, NextPage } from 'next';

import { LoggedHome } from '@/components/pages/Home/LoggedHome';
import { IFoodProps, IFoods } from '@/interfaces/IFoodsProps';
import { foodService } from '@/services/index';

const Index: NextPage<IFoods> = (props) => {
  return <LoggedHome />
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
