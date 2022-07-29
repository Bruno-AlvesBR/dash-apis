import { useEffect } from 'react';

import ProductsDynamicForm from '@/components/core/Forms/Foods/dynamic';
import PodcastDynamicForm from '@/components/core/Forms/Podcast/dynamic';
import { useFood } from '@/hooks/Product';
import SelectDynamicForms from '@/components/core/SelectForms/dynamic';
import { usePodcast } from '@/hooks/Podcast';

import { Container } from '@/styles/theme';

const Dash: React.FC = () => {
  const [
    {
      handleCreateProduct,
      setSelectCompleted,
      selectCompleted,
      formType,
      setFormType,
    },
    { handleCreatePodcast },
  ] = [useFood(), usePodcast()];

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

  return (
    <Container>
      {!selectCompleted ? (
        <SelectDynamicForms />
      ) : formType === 'e-commerce' ? (
        <ProductsDynamicForm
          handleProductSubmit={handleCreateProduct}
        />
      ) : (
        formType === 'podcast' && (
          <PodcastDynamicForm
            handlePodcastSubmit={handleCreatePodcast}
          />
        )
      )}
    </Container>
  );
};

export default Dash;
