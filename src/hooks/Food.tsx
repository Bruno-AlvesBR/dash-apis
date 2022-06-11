import { useRouter } from 'next/router';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

import { IFoodCreate, IFoodProps } from '../interfaces/IFoodsProps';
import { IProductProps, IProductUpdate } from '../interfaces/IProductProps';
import { foodService } from '../services';

interface IFoodContextProps {
  handleCreateProduct?(event: IFoodProps): void;
  handleUpdateProduct?(event: IProductProps): void;
  handleRemoveProduct?(id: string): void;
  productData?: IFoodProps;
}

interface IFoodProviderProps {
  children: ReactNode;
}

const FoodContext = createContext({} as IFoodContextProps);

const FoodProvider = ({ children }: IFoodProviderProps) => {
  const [router] = [useRouter()];

  const [productData, setProductData] = useState<IFoodProps | {}>(
    {} as IFoodProps,
  );

  const handleCreateProduct = useCallback(
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

  const handleUpdateProduct = useCallback(
    async ({ ...event }: IProductUpdate): Promise<IProductUpdate> => {
      try {
        const productResponse = await foodService.update(event?.id, event);

        if (!productResponse && !productResponse?.id) return;

        router.push('/produtos/todos');
      } catch (err) {
        console.log(err);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleRemoveProduct = useCallback(async (id: string) => {
    try {
      const productResponse = await foodService.remove(id);

      if (!productResponse && !productResponse?.id) return;

      router.push('/produtos/todos');
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FoodContext.Provider
      value={{
        handleCreateProduct,
        productData,
        handleUpdateProduct,
        handleRemoveProduct,
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
