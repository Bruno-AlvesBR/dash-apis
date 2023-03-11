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
import { handleFormatProductSending } from '@/utils/formt/product';

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
  isPromotion?: boolean;
  setIsPromotion?(value: boolean): void;
}

interface IFoodProviderProps {
  children: ReactNode;
}

const FoodContext = createContext({} as IFoodContextProps);

const FoodProvider = ({ children }: IFoodProviderProps) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPromotion, setIsPromotion] = useState<boolean>(false);
  const [selectCompleted, setSelectCompleted] =
    useState<boolean>(false);
  const [formType, setFormType] = useState<string>('');
  const [productData, setProductData] = useState<IFoodProps | {}>(
    {} as IFoodProps,
  );

  const handleCreateProduct = useCallback(
    async ({ ...event }: IFoodCreate) => {
      try {
        Object.assign(event, { isPromotion });
        const foodData = await foodService.create({
          ...event,
          isPromotion,
        });

        if (!foodData && !foodData?.id) return;

        setProductData(foodData);
        router.push('/produtos/todos');
      } catch (err) {
        console.error(err);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isPromotion],
  );

  const handleUpdateProduct = useCallback(
    async (event: IProductUpdate) => {
      try {
        const imagesDomainMatch = Object.values(event).filter(item =>
          String(item).includes('iili.io'),
        );
        Object.assign(event, {
          isPromotion,
          images: imagesDomainMatch,
        });

        const product = handleFormatProductSending(event);

        const productResponse = await foodService.update(event?.id, {
          ...product,
          isPromotion,
        });

        if (!productResponse && !productResponse?.id) return;

        setProductData(productResponse);
        router.push('/produtos/todos');
      } catch (err) {
        console.error(err);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isPromotion],
  );

  const handleRemoveProduct = useCallback(
    async (id: string) => {
      try {
        const productResponse = await foodService.remove(id);

        if (!productResponse && !productResponse?.id) return;

        setProductData(productResponse);
        router.push('/produtos/todos');
      } catch (err) {
        console.error(err);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
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
        setIsPromotion,
        isPromotion,
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
