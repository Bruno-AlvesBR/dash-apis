import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { IPodcastProps } from '@/interfaces/IPodcastProps';
import { usePodcast } from '@/hooks/Podcast';

import { Container } from '../styles';

interface IFormProps {
  handlePodcastSubmit(event: any): void;
  podcast?: IPodcastProps;
}

const PodcastForm: React.FC<IFormProps> = ({
  handlePodcastSubmit,
  podcast,
}) => {
  const [{ handleRemovePodcast }, router] = [
    usePodcast(),
    useRouter(),
  ];

  const validateForm = yup.object({
    title: yup.string().required('O título é obrigatório!'),
    description: yup.string().required('A descrição é obrigatória!'),
    members: yup.string().required('Os membros são obrigatórios!'),
    fileDuration: yup.string().required('A duração é obrigatória!'),
    fileType: yup.string().required('O tipo é obrigatório!'),
    fileUrl: yup.string().required('A url é obrigatória!'),
    thumbnail: yup.string().required('A imagem é obrigatória!'),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateForm),
  });

  useEffect(() => {
    if (setValue && podcast) {
      setValue('id', podcast?.id);
      setValue('title', podcast?.title);
      setValue('description', podcast?.description);
      setValue('members', podcast?.members);
      setValue('fileDuration', podcast?.file?.duration);
      setValue('fileType', podcast?.file?.type);
      setValue('fileUrl', podcast?.file?.url);
      setValue('thumbnail', podcast?.thumbnail);
    }
  }, [podcast, setValue]);

  const handleRemoveFormStorage = () => {
    localStorage.removeItem('formulario');

    router.reload();
  };

  return (
    <Container
      data-testid="podcast-form"
      onSubmit={handleSubmit(handlePodcastSubmit)}
    >
      <TextField
        variant="outlined"
        name="id"
        type="text"
        label="id"
        placeholder="id"
        disabled
        {...register('id')}
        inputProps={{ 'data-testid': 'input-form' }}
      />
      <TextField
        variant="outlined"
        name="title"
        type="text"
        label="Título"
        placeholder={errors.title?.message ?? 'Título'}
        {...register('title')}
        inputProps={{ 'data-testid': 'input-form' }}
      />
      <TextField
        variant="outlined"
        name="description"
        type="text"
        label="Descrição"
        placeholder="Descrição"
        {...register('description')}
        inputProps={{ 'data-testid': 'input-form' }}
      />
      <TextField
        variant="outlined"
        name="members"
        type="text"
        label="Membros"
        placeholder="Membros"
        {...register('members')}
        inputProps={{ 'data-testid': 'input-form' }}
      />
      <TextField
        variant="outlined"
        name="fileDuration"
        type="number"
        label="Duração"
        placeholder="Duração"
        {...register('fileDuration')}
        inputProps={{ 'data-testid': 'input-form' }}
      />
      <TextField
        variant="outlined"
        name="fileType"
        type="text"
        label="Tipo"
        placeholder="Tipo"
        {...register('fileType')}
        inputProps={{ 'data-testid': 'input-form' }}
      />
      <TextField
        variant="outlined"
        name="fileUrl"
        type="text"
        label="Url"
        placeholder="Url"
        {...register('fileUrl')}
        inputProps={{ 'data-testid': 'input-form' }}
      />
      <TextField
        variant="outlined"
        name="thumbnail"
        type="text"
        label="Thumbnail"
        placeholder="Thumbnail"
        {...register('thumbnail')}
        inputProps={{ 'data-testid': 'input-form' }}
      />
      <span style={{ display: 'flex', flexDirection: 'row' }}>
        {router.pathname.includes('/produtos/') ? (
          <>
            <Button variant="contained" type="submit">
              Atualizar
            </Button>
            <Button
              variant="contained"
              onClick={() => handleRemovePodcast(podcast?.id)}
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
      </span>
    </Container>
  );
};

export default PodcastForm;
