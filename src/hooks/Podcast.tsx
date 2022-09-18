import { useRouter } from 'next/router';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

import { IFoodProps } from '@/interfaces/IFoodsProps';
import {
  IPodcastCreate,
  IPodcastProps,
  IPodcastUpdate,
} from '@/interfaces/IPodcastProps';
import { podcastService } from '@/services/index';
import { useUser } from './User';

interface IPodcastContextProps {
  handleCreatePodcast?(event: IPodcastProps): void;
  handleUpdatePodcast?(event: IPodcastUpdate): void;
  handleRemovePodcast?(id: string): void;
  podcastData?: IPodcastProps;
  setIsLoading?(type: boolean): void;
  setSelectCompleted?(type: boolean): void;
  isLoading?: boolean;
  selectCompleted?: boolean;
}

interface IPodcastProviderProps {
  children: ReactNode;
}

const PodcastContext = createContext({} as IPodcastContextProps);

const PodcastProvider = ({ children }: IPodcastProviderProps) => {
  const [router, { user }] = [useRouter(), useUser()];

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectCompleted, setSelectCompleted] =
    useState<boolean>(false);
  const [podcastData, setPodcastData] = useState<IFoodProps | {}>(
    {} as IFoodProps,
  );

  const handleCreatePodcast = useCallback(
    async ({ ...event }: IPodcastCreate) => {
      try {
        if (user?.id && user?.admin) {
          const podcastResponse = await podcastService.create(event);

          if (!podcastResponse && !podcastResponse?.id) return;

          setPodcastData(podcastResponse);
          router.push('/produtos/todos');
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

  const handleUpdatePodcast = useCallback(
    async ({ ...event }: IPodcastUpdate) => {
      try {
        if (user?.id && user?.admin) {
          const podcastResponse = await podcastService.update(
            event?.id,
            event,
          );

          if (!podcastResponse && !podcastResponse?.id) return;

          router.push('/produtos/todos');
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

  const handleRemovePodcast = useCallback(
    async (id: string) => {
      try {
        if (user?.id && user?.admin) {
          const podcastResponse = await podcastService.remove(id);

          if (!podcastResponse && !podcastResponse?.id) return;

          router.push('/produtos/todos');
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

  return (
    <PodcastContext.Provider
      value={{
        handleCreatePodcast,
        podcastData,
        handleUpdatePodcast,
        handleRemovePodcast,
        setIsLoading,
        isLoading,
        setSelectCompleted,
        selectCompleted,
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
};

function usePodcast() {
  const context = useContext(PodcastContext);

  if (!context) {
    throw new Error('usePodcast must be within a PodcastProvider');
  }

  return context;
}

export { PodcastProvider, usePodcast };
