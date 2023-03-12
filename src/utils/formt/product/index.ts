import { IProductUpdate } from '@/interfaces/IProductProps';

const handleFormatProductSending = (
  event: IProductUpdate,
): IProductUpdate => {
  const defaultReplace = (attribute: string) =>
    String(attribute).replaceAll('R$', '').trim();

  const product = {
    ...event,
    priceNumber: defaultReplace(event?.priceNumber),
    newPriceDiscount: defaultReplace(event?.newPriceDiscount),
    pricePerMonth: defaultReplace(event?.pricePerMonth),
  };

  return product;
};

export { handleFormatProductSending };
