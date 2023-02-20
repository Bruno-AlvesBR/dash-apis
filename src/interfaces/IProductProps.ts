export interface IProductProps {
  _id?: string;
  id?: string;
  title?: string;
  description?: string;
  category?: string[];
  price?: {
    priceNumber?: number;
    newPriceDiscount?: string;
    installment?: {
      monthInstallment?: number;
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

export interface IProductCreate {
  id?: string;
  title?: string;
  description?: string;
  category?: string[];
  priceNumber?: number;
  monthInstallment?: number;
  newPriceDiscount?: string;
  pricePerMonth?: string;
  brand?: string;
  rating?: number;
  freight?: boolean;
  stock?: number;
  manufacture?: string;
  slug?: string;
  isPromotion?: boolean;
  discountPercentage?: number;
  mobileSrc?: string;
  desktopSrc?: string;
}

export interface IProductUpdate {
  id?: string;
  title?: string;
  description?: string;
  category?: string[];
  priceNumber?: number;
  monthInstallment?: number;
  newPriceDiscount?: string;
  pricePerMonth?: string;
  brand?: string;
  rating?: number;
  freight?: boolean;
  stock?: number;
  manufacture?: string;
  slug?: string;
  isPromotion?: boolean;
  discountPercentage?: number;
  mobileSrc?: string;
  desktopSrc?: string;
}

export interface IProducts {
  foods?: IProductProps[];
}

export interface IProductSlug {
  foods?: IProductProps;
}
