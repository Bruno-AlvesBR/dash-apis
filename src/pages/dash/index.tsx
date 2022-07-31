import { useCallback, useEffect } from 'react';

import ProductsDynamicForm from '@/components/core/Forms/Foods/dynamic';
import PodcastDynamicForm from '@/components/core/Forms/Podcast/dynamic';
import { useFood } from '@/hooks/Product';
import SelectDynamicForms from '@/components/core/SelectForms/dynamic';
import { usePodcast } from '@/hooks/Podcast';
import VideosDynamicForm from '@/components/core/Forms/Videos/dynamic';
import { useVideo } from '@/hooks/Videos';

import { Container } from '@/styles/theme';

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
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const formType = localStorage.getItem('formulario');

    if (!formType) return;

    setSelectCompleted(true);
    setFormType(formType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSelectCompleted]);

  const formSelected = useCallback(
    (type: string) => {
      const components = {
        ecommerce: (
          <ProductsDynamicForm
            handleProductSubmit={handleCreateProduct}
          />
        ),
        podcast: (
          <PodcastDynamicForm
            handlePodcastSubmit={handleCreatePodcast}
          />
        ),
        videos: (
          <VideosDynamicForm handleVideoSubmit={handleCreateVideo} />
        ),
      };

      return components[type];
    },
    [handleCreatePodcast, handleCreateProduct, handleCreateVideo],
  );

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
