import { useCallback, useEffect, useMemo } from 'react';

import ProductsForm from '@/components/core/Forms/Foods';
import PodcastForm from '@/components/core/Forms/Podcast';
import { useFood } from '@/hooks/Product';
import SelectDynamicForms from '@/components/core/SelectForms';
import { usePodcast } from '@/hooks/Podcast';
import VideosForm from '@/components/core/Forms/Videos';
import { useVideo } from '@/hooks/Videos';

import { Container } from '@/styles/theme';
import { GetStaticProps } from 'next';

const Dash: React.FC = () => {
  const {
    handleCreateProduct,
    setSelectCompleted,
    selectCompleted,
    formType,
    setFormType,
  } = useFood();
  const { handleCreatePodcast } = usePodcast();
  const { handleCreateVideo } = useVideo();

  useEffect(() => {
    const form = localStorage.getItem('formulario');

    if (form) {
      localStorage.removeItem('formulario');
      setFormType(undefined);
      setSelectCompleted(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const formType = localStorage.getItem('formulario');

    if (!formType) return;

    setSelectCompleted(true);
    setFormType(formType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSelectCompleted]);

  const formSelected = useCallback(
    (type: string) =>
      ({
        ecommerce: (
          <ProductsForm
            handleProductSubmit={handleCreateProduct}
          />
        ),
        podcast: (
          <PodcastForm
            handlePodcastSubmit={handleCreatePodcast}
          />
        ),
        videos: (
          <VideosForm handleVideoSubmit={handleCreateVideo} />
        ),
      }[type]),
    [handleCreatePodcast, handleCreateProduct, handleCreateVideo],
  );

  useMemo(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (typeof window !== ('undefined' || undefined)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <Container>
      {!selectCompleted ? (
        <SelectDynamicForms />
      ) : (
        formSelected(formType)
      )}
    </Container>
  );
};

export default Dash;

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
  revalidate: 600,
});
