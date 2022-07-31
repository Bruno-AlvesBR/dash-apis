import { podcastService } from '@/services/index';
import { Container } from '@/styles/theme';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import DynamicPodcastForm from '@/components/core/Forms/Podcast/dynamic';
import { IPodcastProps } from '@/interfaces/IPodcastProps';
import { usePodcast } from '@/hooks/Podcast';

interface IPodcastSlugProps {
  podcast?: IPodcastProps;
}

const Podcast: NextPage<IPodcastSlugProps> = ({ podcast }) => {
  const { handleUpdatePodcast } = usePodcast();

  return (
    <Container>
      <DynamicPodcastForm
        handlePodcastSubmit={handleUpdatePodcast}
        podcast={podcast}
      />
    </Container>
  );
};

export default Podcast;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { id } = ctx.params;

  try {
    const podcast = await podcastService.findById(id);

    return {
      props: { podcast },
      revalidate: 60,
    };
  } catch (err) {
    console.log(err);

    return {
      props: {
        podcast: {},
      },
      revalidate: 60,
    };
  }
};
