export interface IFoodProps {
  _id?: string;
  id?: string;
  title?: string;
  description?: string;
  category?: string[];
  price?: {
    number?: string;
    newPriceDiscount?: string;
    installment?: {
      month?: number;
      pricePerMonth?: string;
    };
  };
  brand?: string;
  rating?: number;
  freight?: boolean;
  stock?: number;
  manufacture?: string;
  slug?: string;
  image?: {
    mobileSrc?: string;
    desktopSrc?: string;
  };
  isPromotion?: boolean;
  discountPercentage?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface IFoodCreate {
  id?: string;
  title?: string;
  description?: string;
  category?: string[];
  priceNumber?: number;
  monthInstallment?: number;
  pricePerMonth?: number;
  brand?: string;
  rating?: number;
  freight?: boolean;
  stock?: number;
  manufacture?: string;
  slug?: string;
  mobileSrc?: string;
  desktopSrc?: string;
  isPromotion?: boolean;
  discountPercentage?: number;
}

export interface IFoods {
  foods?: IFoodProps[];
}

export interface IFoodsSLug {
  foods?: IFoodProps;
}
