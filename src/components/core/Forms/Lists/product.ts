import { HTMLInputTypeAttribute } from 'react';

export interface IProductFormList {
  title: string;
  label: string;
  fieldType: HTMLInputTypeAttribute;
  disabled?: boolean;
  alternativePaths?: {
    first?: string;
    second?: string;
  };
}

const productFormList: Array<IProductFormList> = [
  {
    title: 'id',
    label: 'id',
    fieldType: 'text',
    disabled: true,
  },
  {
    title: 'Título',
    label: 'title',
    fieldType: 'text',
  },
  {
    title: 'Slug',
    label: 'slug',
    fieldType: 'text',
  },
  {
    title: 'Descrição',
    label: 'description',
    fieldType: 'text',
  },
  {
    title: 'Marca',
    label: 'brand',
    fieldType: 'text',
  },
  {
    title: 'Categoria',
    label: 'category',
    fieldType: 'text',
  },
  {
    title: 'Fabricante',
    label: 'manufacture',
    fieldType: 'text',
  },
  {
    title: 'Preço',
    label: 'priceNumber',
    fieldType: 'text',
    alternativePaths: {
      first: 'price',
    },
  },
  {
    title: 'Meses de Parcelamento',
    label: 'monthInstallment',
    fieldType: 'number',
    alternativePaths: {
      first: 'price',
      second: 'installment',
    },
  },
  {
    title: 'Preço por mês',
    label: 'pricePerMonth',
    fieldType: 'text',
    disabled: true,
    alternativePaths: {
      first: 'price',
      second: 'installment',
    },
  },
  {
    title: 'Avaliação',
    label: 'rating',
    fieldType: 'text',
  },
  {
    title: 'Quant em stock',
    label: 'stock',
    fieldType: 'text',
  },
];

export { productFormList };
