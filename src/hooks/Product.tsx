import { useRouter } from 'next/router';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

import { IFoodCreate, IFoodProps } from '@/interfaces/IFoodsProps';
import {
  IProductProps,
  IProductUpdate,
} from '@/interfaces/IProductProps';
import { foodService } from '@/services/index';
import { useUser } from './User';

interface IFoodContextProps {
  handleCreateProduct?(event: IFoodProps): void;
  handleUpdateProduct?(event: IProductProps): void;
  handleRemoveProduct?(id: string): void;
  productData?: IFoodProps;
  setIsLoading?(type: boolean): void;
  setSelectCompleted?(type: boolean): void;
  setFormType?(type: string): void;
  isLoading?: boolean;
  selectCompleted?: boolean;
  formType?: string;
}

interface IFoodProviderProps {
  children: ReactNode;
}

const FoodContext = createContext({} as IFoodContextProps);

const FoodProvider = ({ children }: IFoodProviderProps) => {
  const [router, { user }] = [useRouter(), useUser()];

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectCompleted, setSelectCompleted] =
    useState<boolean>(false);
  const [formType, setFormType] = useState<string>('');
  const [productData, setProductData] = useState<IFoodProps | {}>(
    {} as IFoodProps,
  );

  const handleCreateProduct = useCallback(
    async ({ ...event }: IFoodCreate): Promise<IFoodCreate> => {
      try {
        if (user?.id) {
          const foodData = await foodService.create(event);

          if (!foodData && !foodData?.id) return;

          setProductData(foodData);
        }
      } catch (err) {
        console.log(err);
      }
    },
    [user?.id],
  );

  const handleUpdateProduct = useCallback(
    async ({ ...event }: IProductUpdate): Promise<IProductUpdate> => {
      try {
        if (user?.id) {
          const productResponse = await foodService.update(
            event?.id,
            event,
          );

          if (!productResponse && !productResponse?.id) return;

          router.push('/produtos/todos');
        }
      } catch (err) {
        console.log(err);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user?.id],
  );

  const handleRemoveProduct = useCallback(
    async (id: string) => {
      try {
        if (user?.id) {
          const productResponse = await foodService.remove(id);

          if (!productResponse && !productResponse?.id) return;

          router.push('/produtos/todos');
        }
      } catch (err) {
        console.log(err);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user?.id],
  );

  return (
    <FoodContext.Provider
      value={{
        handleCreateProduct,
        productData,
        handleUpdateProduct,
        handleRemoveProduct,
        setIsLoading,
        isLoading,
        setSelectCompleted,
        selectCompleted,
        setFormType,
        formType,
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
