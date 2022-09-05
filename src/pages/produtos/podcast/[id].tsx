import { GetServerSideProps, NextPage } from 'next';

import { podcastService } from '@/services/index';
import DynamicPodcastForm from '@/components/core/Forms/Podcast/dynamic';
import { IPodcastProps } from '@/interfaces/IPodcastProps';
import { usePodcast } from '@/hooks/Podcast';
import HeadPage from '@/components/core/Head';

import { Container } from '@/styles/theme';

interface IPodcastSlugProps {
  podcast?: IPodcastProps;
}

const Podcast: NextPage<IPodcastSlugProps> = ({ podcast }) => {
  const { handleUpdatePodcast } = usePodcast();

  return (
    <Container>
      <HeadPage>
        <title>Podcast</title>
      </HeadPage>
      <DynamicPodcastForm
        handlePodcastSubmit={handleUpdatePodcast}
        podcast={podcast}
      />
    </Container>
  );
};

export default Podcast;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { id } = ctx.params;

  try {
    const podcast = await podcastService.findById(id);

    return {
      props: { podcast },
    };
  } catch (err) {
    console.log(err);

    return {
      props: { podcast: {} },
    };
  }
};
