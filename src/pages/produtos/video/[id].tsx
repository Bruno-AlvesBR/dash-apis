import { videoService } from '@/services/index';
import { Container } from '@/styles/theme';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import DynamicVideoForm from '@/components/core/Forms/Videos/dynamic';
import { useVideo } from '@/hooks/Videos';
import { IVideoProps } from '@/interfaces/IVideoProps';

interface IVideoSlugProps {
  video?: IVideoProps;
}

const Video: NextPage<IVideoSlugProps> = ({ video }) => {
  const { handleUpdateVideo } = useVideo();

  return (
    <Container>
      <DynamicVideoForm
        handleVideoSubmit={handleUpdateVideo}
        video={video}
      />
    </Container>
  );
};

export default Video;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { id } = ctx.params;

  try {
    const video = await videoService.findById(id);

    return {
      props: { video },
      revalidate: 60,
    };
  } catch (err) {
    console.log(err);

    return {
      props: {
        video: {},
      },
      revalidate: 60,
    };
  }
};
