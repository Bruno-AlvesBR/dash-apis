import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import { memo, useEffect } from 'react';

import { IVideoBody, IVideoProps } from '@/interfaces/IVideoProps';
import { useVideo } from '@/hooks/Videos';
import SnackbarContent from '@/components/core/Snackbar';

import { Container } from '../styles';

interface IVideoFormProps {
  handleVideoSubmit?(data: IVideoBody): void;
  video?: IVideoProps;
}

const VideosForm: React.FC<IVideoFormProps> = ({
  handleVideoSubmit,
  video,
}) => {
  const { reload, pathname } = useRouter();
  const { handleDeleteVideo } = useVideo();

  const validationsForm = yup.object({
    id: yup.string(),
    title: yup.string().required('* Must have title'),
    description: yup.string(),
    fileUrl: yup.string().required('* Must have url'),
    fileType: yup.string(),
    fileImage: yup.string().required('* Must have image'),
    rating: yup.number().default(0),
    duration: yup.number().default(0),
  });

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationsForm),
  });

  useEffect(() => {
    if (setValue && video) {
      setValue('id', video?.id);
      setValue('title', video?.title);
      setValue('description', video?.description);
      setValue('rating', video?.rating);
      setValue('duration', video?.duration);
      setValue('fileUrl', video?.file?.url);
      setValue('fileType', video?.file?.type);
      setValue('fileImage', video?.file?.image);
    }
  }, [setValue, video]);

  const handleRemoveFormStorage = async () => {
    await localStorage.removeItem('formulario');

    reload();
  };

  return (
    <Container onSubmit={handleSubmit(handleVideoSubmit)}>
      <TextField
        name="id"
        label="id"
        placeholder="id"
        disabled
        type="text"
        {...register('id')}
      />
      <TextField
        name="title"
        placeholder="title"
        label={errors.title?.message ?? 'title'}
        {...register('title')}
        type="text"
        error={errors.title?.message}
      />
      <TextField
        name="description"
        placeholder="description"
        label={errors.description?.message ?? 'description'}
        {...register('description')}
        type="text"
      />
      <TextField
        name="fileUrl"
        placeholder="fileUrl"
        label={errors.fileUrl?.message ?? 'fileUrl'}
        {...register('fileUrl')}
        type="text"
        error={errors.fileUrl?.message}
      />
      <TextField
        name="fileType"
        placeholder="fileType"
        label={errors.fileType?.message ?? 'Type'}
        {...register('fileType')}
        type="text"
      />
      <TextField
        name="fileImage"
        placeholder="fileImage"
        label={errors.fileImage?.message ?? 'Image'}
        {...register('fileImage')}
        type="text"
        error={errors.fileImage?.message}
      />
      <TextField
        name="rating"
        placeholder="rating"
        label={errors.rating?.message ?? 'rating'}
        {...register('rating')}
        type="number"
      />
      <TextField
        name="duration"
        placeholder="duration"
        label={errors.duration?.message ?? 'duration'}
        {...register('duration')}
        type="number"
      />
      <Box display="flex" alignItems="center">
        {pathname.includes('/produtos/') ? (
          <>
            <Button variant="contained" type="submit">
              Atualizar
            </Button>
            <Button
              variant="contained"
              onClick={() => handleDeleteVideo(video?.id)}
              style={{ marginLeft: 20 }}
            >
              Remover
            </Button>
          </>
        ) : (
          <>
            <Button variant="contained" type="submit">
              Criar
            </Button>
            <Button onClick={() => handleRemoveFormStorage()}>
              Voltar
            </Button>
          </>
        )}
      </Box>
      <SnackbarContent
        message="Sucesso ao atualizar vídeo"
        alert="success"
        setVertical="top"
        setHorizontal="right"
      />
    </Container>
  );
};

export default memo(VideosForm);
