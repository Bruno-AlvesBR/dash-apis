import { useEffect } from 'react';

import EForm from '../../components/core/Forms/Foods';
import PodcastForm from '../../components/core/Forms/Podcast';
import { useFood } from '../../hooks/Product';
import SelectForms from '../../components/core/SelectForms';
import { usePodcast } from '../../hooks/Podcast';

import { Container } from '../../styles/theme';

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
        <SelectForms />
      ) : formType === 'e-commerce' ? (
        <EForm handleProductSubmit={handleCreateProduct} />
      ) : (
        formType === 'podcast' && (
          <PodcastForm handlePodcastSubmit={handleCreatePodcast} />
        )
      )}
    </Container>
  );
};

export default Dash;
