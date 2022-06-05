import { CircularProgress } from '@material-ui/core';
import { useEffect, useState } from 'react';

import { CardContent } from '../../components/core/CardContent';
import Carrousel from '../../components/core/Carrousel';
import { IFoodProps } from '../../interfaces/IFoodsProps';
import { foodService } from '../../services';

import Container from './styles';

const Todos = () => {
  const [foodsData, setFoodsData] = useState<IFoodProps[]>([]);

  const getFoods = () => {
    try {
      const foodsOnbounce = setTimeout(async () => {
        const foodResponse = await foodService?.findAll();

        setFoodsData(foodResponse);
        return () => clearTimeout(foodsOnbounce);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFoods();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {foodsData.length !== 0 ? (
        <Carrousel mobileWidth={275} desktopWidth={315}>
          {foodsData?.map(food => (
            <CardContent
              key={food?.id}
              id={food?.id}
              title={food?.title}
              description={food?.description}
              image={food?.image}
              brand={food?.brand}
            />
          ))}
        </Carrousel>
      ) : (
        <CircularProgress style={{ margin: 10 }} />
      )}
    </Container>
  );
};

export default Todos;
