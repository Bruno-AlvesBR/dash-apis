import { CircularProgress } from '@material-ui/core';
import { useEffect, useState } from 'react';

import { CardContent } from '../../components/core/CardContent';
import { IFoodProps } from '../../interfaces/IFoodsProps';
import { foodService } from '../../services';

import Container from './styles';

const Todos = () => {
  const [foodsData, setFoodsData] = useState<IFoodProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getFoods = () => {
    try {
      const foodsOnbounce = setTimeout(async () => {
        const foodResponse = await foodService?.findAll();

        setFoodsData(foodResponse);
        return () => clearTimeout(foodsOnbounce);
      }, 1000);

      setLoading(false);
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
      {foodsData && !loading ? (
        foodsData?.map(food => (
          <CardContent
            key={food?.id}
            id={food?.id}
            title={food?.title}
            description={food?.description}
            image={food?.image}
            brand={food?.brand}
          />
        ))
      ) : (
        <CircularProgress style={{ margin: 'auto' }} />
      )}
    </Container>
  );
};

export default Todos;
