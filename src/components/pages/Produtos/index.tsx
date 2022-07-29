import { memo } from 'react';

import { IProductProps } from '@/interfaces/IProductProps';
import { CardContent } from '@/components/core/CardContent';
import Carrousel from '@/components/core/Carrousel';
import { IPodcastProps } from '@/interfaces/IPodcastProps';

import { Container } from './styles';

interface IProductsContentProps {
  foods: IProductProps[];
  podcasts: IPodcastProps[];
}

const ProductsContent: React.FC<IProductsContentProps> = ({
  foods,
  podcasts,
}) => {
  const FoodContent: React.FC = () => (
    <Carrousel mobileWidth={275} desktopWidth={315}>
      {foods?.map(item => (
        <CardContent
          key={item?.id}
          id={item?.id}
          title={item?.title}
          description={item?.description}
          desktopSrc={item?.image?.desktopSrc}
          createdAt={item?.createdAt}
          slug={item?.slug}
        />
      ))}
    </Carrousel>
  );

  const PodcastContent: React.FC = () => (
    <Carrousel mobileWidth={275} desktopWidth={315}>
      {podcasts?.map(item => (
        <CardContent
          key={item?.id}
          id={item?.id}
          title={item?.title}
          description={item?.description}
          desktopSrc={item?.thumbnail}
          createdAt={item?.createdAt}
        />
      ))}
    </Carrousel>
  );

  return (
    <Container>
      <FoodContent />
      <PodcastContent />
    </Container>
  );
};

export default memo(ProductsContent);
