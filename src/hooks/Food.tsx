import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

import { IFoodProps } from '../interfaces/IFoodsProps';
import { api } from '../services/api';

interface IFoodContextProps {
  onsubmit?(event: IFoodProps): void;
  productData?: IFoodProps;
}

interface IFoodProviderProps {
  children: ReactNode;
}

const FoodContext = createContext({} as IFoodContextProps);

const FoodProvider = ({ children }: IFoodProviderProps) => {
  const [productData, setProductData] = useState<IFoodProps | {}>(null);

  const onsubmit = useCallback(async event => {
    try {
      const { data } = await api.post('/foods/create', {
        name: event?.name,
        description: event?.description,
        price: event?.price,
        thumbnail: event?.thumbnail,
        category: event?.category,
        brand: event?.brand,
        monthInstallment: event?.monthInstallment,
        quantity: event?.quantity,
      });

      if (!data) return;

      setProductData(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <FoodContext.Provider
      value={{
        onsubmit,
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
