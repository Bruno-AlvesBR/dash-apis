import { GetServerSideProps, NextPage } from 'next';

import { videoService } from '@/services/index';
import DynamicVideoForm from '@/components/core/Forms/Videos/dynamic';
import { useVideo } from '@/hooks/Videos';
import { IVideoProps } from '@/interfaces/IVideoProps';

import { Container } from '@/styles/theme';

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

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { id } = ctx.params;

  try {
    const video = await videoService.findById(id);

    return {
      props: { video },
    };
  } catch (err) {
    console.log(err);

    return {
      props: { video: {} },
    };
  }
};
