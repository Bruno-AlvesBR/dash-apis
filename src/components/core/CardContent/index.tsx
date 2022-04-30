import { Button } from '@material-ui/core';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Skeleton } from '@mui/material';

import { IFoodProps } from '../../../interfaces/IFoodsProps';

import { Card, Title, Description } from './styles';
import { UseUser } from '../../../hooks/User';

export const CardContent: NextPage<IFoodProps> = ({
  id,
  name,
  description,
  price,
  thumbnail,
  brand,
  createdAt,
}) => {
  const [router, { user }] = [useRouter(), UseUser()];

  const [allItems, setAllItems] = useState([]);

  const handleRedirect = () => {
    router.push(`/produtos/${id}`);
  };

  useEffect(() => {
    const formatData = [
      dayjs(createdAt).format('DD MMM YYYY'),
    ];

    if (router.pathname === '/produtos/todos') {
      setAllItems([...formatData]);
    }
  }, [createdAt, router.pathname]);

  return (
    <Card>
      {allItems}
      {thumbnail && thumbnail == 'https://' ? (
        <Image
          src={thumbnail}
          alt={name}
          width={200}
          height={200}
        />
      ) : (
        <Skeleton width={200} height={200} />
      )}
      <Title>
        <h2>{name}</h2>
        <p>{description}</p>
      </Title>
      <Description>
        <p>{brand}</p>
        <strong>R$ {price},00</strong>
      </Description>
      {user?.admin && (
        <Button
          variant="contained"
          onClick={handleRedirect}
        >
          Editar
        </Button>
      )}
    </Card>
  );
};
