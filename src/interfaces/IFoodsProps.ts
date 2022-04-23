export interface IFoodProps {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  thumbnail?: string;
  category?: string;
  brand?: string;
  monthInstallment?: number;
  quantity?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface IFoods {
  foods?: IFoodProps[];
}

export interface IFoodsSLug {
  foods?: IFoodProps;
}