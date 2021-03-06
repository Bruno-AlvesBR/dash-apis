import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useCallback, useMemo } from 'react';
import dayjs from 'dayjs';
import { Skeleton } from '@mui/material';

import { useUser } from '@/hooks/User';
import { ICardProps } from '@/interfaces/ICardProps';

import { Card, Title, Description, ContentImage } from './styles';
import { useLogin } from '@/hooks/Login';

export const CardContent: React.FC<ICardProps> = ({ ...props }) => {
  const [router, { user }, { setOpenDialog }] = [
    useRouter(),
    useUser(),
    useLogin(),
  ];

  const handleRedirect = useCallback(() => {
    router.push(`/produtos/${props?.slug}`);
  }, [router, props?.slug]);

  const handleClick = () => {
    if (user?.id) return handleRedirect();

    setOpenDialog(true);
  };

  const productCreatedAt = useMemo(() => {
    return props?.createdAt && [dayjs(props?.createdAt).format('DD MMM YYYY')];
  }, [props?.createdAt]);

  return (
    <Card data-testid="card-content">
      {productCreatedAt}
      {props?.desktopSrc ? (
        <ContentImage>
          <Image src={props?.desktopSrc} alt={props?.title} layout="fill" />
        </ContentImage>
      ) : (
        <Skeleton width={200} height={200} />
      )}
      <Title data-testid="title-card">{props?.title}</Title>
      <Description>{props?.description}</Description>
      <Button
        data-testid="edit-button-card"
        variant="contained"
        onClick={handleClick}
      >
        Editar
      </Button>
    </Card>
  );
};
