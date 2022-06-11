export interface IProductProps {
  _id?: string;
  id?: string;
  title?: string;
  description?: string;
  category?: string[];
  price?: {
    priceNumber?: number;
    installment?: {
      monthInstallment?: number;
      pricePerMonth?: number;
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
  pricePerMonth?: number;
  brand?: string;
  rating?: number;
  freight?: boolean;
  stock?: number;
  manufacture?: string;
  slug?: string;
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
  pricePerMonth?: number;
  brand?: string;
  rating?: number;
  freight?: boolean;
  stock?: number;
  manufacture?: string;
  slug?: string;
  mobileSrc?: string;
  desktopSrc?: string;
}

export interface IProducts {
  foods?: IProductProps[];
}

export interface IProductSlug {
  foods?: IProductProps;
}
