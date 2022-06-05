import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { Skeleton } from '@mui/material';

import { IFoodProps } from '../../../interfaces/IFoodsProps';
import { useUser } from '../../../hooks/User';

import { Card, Title, Description } from './styles';

export const CardContent: React.FC<IFoodProps> = ({
  id,
  title,
  description,
  brand,
  createdAt,
  image,
}) => {
  const [router, { user }] = [useRouter(), useUser()];

  const handleRedirect = () => router.push(`/produtos/${id}`);

  const productCreatedAt = useMemo(() => {
    return [dayjs(createdAt).format('DD MMM YYYY')];
  }, [createdAt]);

  return (
    <Card>
      {productCreatedAt}
      {image?.desktopSrc ? (
        <Image src={image?.desktopSrc} alt={title} width={100} height={200} />
      ) : (
        <Skeleton width={200} height={200} />
      )}
      <Title>
        <h2>{title}</h2>
        <p>{description}</p>
      </Title>
      <Description>
        <p>{brand}</p>
      </Description>
      {user?.admin && (
        <Button variant="contained" onClick={handleRedirect}>
          Editar
        </Button>
      )}
    </Card>
  );
};
