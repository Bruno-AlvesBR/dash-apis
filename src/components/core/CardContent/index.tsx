import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { Skeleton } from '@mui/material';

import { IFoodProps } from '../../../interfaces/IFoodsProps';
import { useUser } from '../../../hooks/User';

import { Card, Title, Description } from './styles';

export const CardContent: React.FC<IFoodProps> = ({ ...props }) => {
  const [router, { user }] = [useRouter(), useUser()];

  const handleRedirect = useCallback(() => {
    router.push(`/produtos/${props?.slug}`);
  }, [router, props?.slug]);

  const productCreatedAt = useMemo(() => {
    return [dayjs(props?.createdAt).format('DD MMM YYYY')];
  }, [props?.createdAt]);

  return (
    <Card>
      {productCreatedAt}
      {props?.image?.desktopSrc ? (
        <Image
          src={props?.image?.desktopSrc}
          alt={props?.title}
          width={100}
          height={200}
        />
      ) : (
        <Skeleton width={200} height={200} />
      )}
      <Title>
        <h2>{props?.title}</h2>
        <p>{props?.description}</p>
      </Title>
      <Description>
        <p>{props?.brand}</p>
      </Description>
      {user?.admin && (
        <Button variant="contained" onClick={handleRedirect}>
          Editar
        </Button>
      )}
    </Card>
  );
};
