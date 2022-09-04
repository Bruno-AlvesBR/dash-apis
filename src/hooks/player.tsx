import {
  createContext,
  MutableRefObject,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import { IContentProps } from '@/interfaces/IPlayerProps';

export interface IPlayerContextProps {
  setIsPlaying?(event: boolean): void;
  setIsOpenPlayer?(event: boolean): void;
  setCurrentTime?(event: number): void;
  setContentPlayer?(content: IContentProps): void;
  setContentList?(content: IContentProps[]): void;
  currentTime?: number;
  isPlaying?: boolean;
  isOpenPlayer?: boolean;
  contentPlayer?: IContentProps;
  contentList?: IContentProps[];
  handleTogglePlay?(content?: IContentProps): void;
  handleChangePlayerTime?(_: Event, number: number): void;
  playerRef?: MutableRefObject<HTMLAudioElement>;
  handlePlay?(): void;
}

export interface IPlayerProviderProps {
  children?: ReactNode;
}

const PlayerContext = createContext({} as IPlayerContextProps);

const PlayerProvider: React.FC<IPlayerProviderProps> = ({
  children,
}) => {
  const playerRef = useRef<HTMLAudioElement>({} as HTMLAudioElement);

  const [isPlaying, setIsPlaying] = useState(false);
  const [contentPlayer, setContentPlayer] = useState<IContentProps>(
    {} as IContentProps,
  );
  const [contentList, setContentList] = useState<IContentProps[]>(
    [] as IContentProps[],
  );
  const [isOpenPlayer, setIsOpenPlayer] = useState(false);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const handleTogglePlay = useCallback(
    (content?: IContentProps) => {
      setIsPlaying(!isPlaying);
      setIsOpenPlayer(true);
      setContentPlayer(content);
      setCurrentTime(0);
    },
    [isPlaying],
  );

  const handlePlay = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    if (!playerRef && !playerRef.current && !contentPlayer.file.url)
      return;

    playerRef?.current.play && isPlaying
      ? playerRef.current.pause()
      : playerRef.current.play();

    if (!isOpenPlayer) {
      setContentPlayer(undefined);
      playerRef.current.pause();
    }
  }, [contentPlayer, isPlaying, isOpenPlayer]);

  const handleChangePlayerTime = (_: Event, number: number) => {
    playerRef.current.currentTime = number;
    setCurrentTime(number);
  };

  return (
    <PlayerContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        handleTogglePlay,
        playerRef,
        setIsOpenPlayer,
        isOpenPlayer,
        setCurrentTime,
        currentTime,
        handleChangePlayerTime,
        setContentPlayer,
        contentPlayer,
        handlePlay,
        setContentList,
        contentList,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

function usePlayer(): IPlayerContextProps {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error('usePlayer must be with in a PlayerProvider');
  }

  return context;
}

export { PlayerContext, PlayerProvider, usePlayer };
