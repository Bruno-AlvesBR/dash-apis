import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

import { IFoodCreate, IFoodProps } from '../interfaces/IFoodsProps';
import { foodService } from '../services';

interface IFoodContextProps {
  createFood?(event: IFoodProps): void;
  productData?: IFoodProps;
}

interface IFoodProviderProps {
  children: ReactNode;
}

const FoodContext = createContext({} as IFoodContextProps);

const FoodProvider = ({ children }: IFoodProviderProps) => {
  const [productData, setProductData] = useState<IFoodProps | {}>(null);

  const createFood = useCallback(
    async ({ ...event }: IFoodCreate): Promise<IFoodCreate> => {
      try {
        const foodData = await foodService.create(event);

        if (!foodData && !foodData?.id) return;

        setProductData(foodData);
      } catch (err) {
        console.log(err);
      }
    },
    [],
  );

  return (
    <FoodContext.Provider
      value={{
        createFood,
        productData,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

function useFood() {
  const context = useContext(FoodContext);

  if (!context) {
    throw new Error('useFood must be within a FoodProvider');
  }

  return context;
}

export { FoodProvider, useFood };
