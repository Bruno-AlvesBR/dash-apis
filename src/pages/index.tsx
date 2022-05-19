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
    const foodData: IFoodProps[] = await foodService?.findAll();

    const foods = foodData?.map(({ ...foods }) => {
      return {
        id: foods?.id,
        title: foods?.title,
        description: foods?.description,
        price: {
          number: foods?.price?.number,
          installment: {
            month: foods?.price?.installment?.month,
            pricePerMonth: foods?.price?.installment?.pricePerMonth,
          },
        },
        image: {
          mobileSrc: foods?.image?.mobileSrc,
          desktopSrc: foods?.image?.desktopSrc,
        },
        slug: foods?.slug,
        manufacturer: foods?.manufacture,
        category: foods?.category,
        brand: foods?.brand,
        stock: foods?.stock,
        freight: foods?.freight,
        rating: foods?.rating,
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
