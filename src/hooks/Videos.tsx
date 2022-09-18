import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
} from 'react';
import { useRouter } from 'next/router';

import { IVideoBody } from '@/interfaces/IVideoProps';
import { videoService } from '@/services/index';
import { useUser } from './User';
import { useSnack } from './Snackbar';

interface IVideoContextProps {
  handleCreateVideo?(data: IVideoBody): void;
  handleUpdateVideo?(data: IVideoBody): void;
  handleDeleteVideo?(id: string): void;
}

interface IVideoProviderProps {
  children: ReactNode;
}

const VideoContext = createContext({} as IVideoContextProps);

const VideoProvider: React.FC<IVideoProviderProps> = ({
  children,
}) => {
  const { user } = useUser();
  const { push, reload } = useRouter();
  const { setOpenSnackBar } = useSnack();

  const handleCreateVideo = useCallback(
    async (data: IVideoBody) => {
      try {
        if (user?.id && user?.admin) {
          const videoData = await videoService.create(data);

          if (!videoData && !videoData?.id) return;

          push('/produtos/todos');
        } else {
          window.alert('Permition denied!');
        }
      } catch (err) {
        console.log(err);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user?.id && user?.admin],
  );

  const handleUpdateVideo = useCallback(
    async (data: IVideoBody) => {
      try {
        if (user?.id && user?.admin) {
          const updatedVideo = await videoService.update(
            data?.id,
            data,
          );

          if (!updatedVideo && !updatedVideo?.id) return;

          setOpenSnackBar(true);

          push('/produtos/todos');
        } else {
          window.alert('Permition denied!');
        }
      } catch (err) {
        console.log(err);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [reload, setOpenSnackBar],
  );

  const handleDeleteVideo = useCallback(
    async (id: string) => {
      try {
        if (user?.id && user?.admin) {
          const deletedVideo = await videoService.remove(id);

          if (!deletedVideo && !deletedVideo?.id) return;

          push('/produtos/todos');
        } else {
          window.alert('Permition denied!');
        }
      } catch (err) {
        console.log(err);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <VideoContext.Provider
      value={{
        handleCreateVideo,
        handleUpdateVideo,
        handleDeleteVideo,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

function useVideo(): IVideoContextProps {
  const context = useContext(VideoContext);

  if (!context) {
    throw new Error('useVideo must be used with in a videoProvider');
  }

  return context;
}

export { VideoProvider, useVideo };
