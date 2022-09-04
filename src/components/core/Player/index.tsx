import Slider from '@mui/material/Slider';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

import { Controls } from './Controls';
import { usePlayer } from '@/hooks/player';

import {
  CloseButton,
  Container,
  ContentHeader,
  Title,
} from './styles';

const Player: React.FC = () => {
  const {
    handlePlay,
    playerRef,
    isOpenPlayer,
    isPlaying,
    currentTime,
    handleChangePlayerTime,
    contentPlayer,
    setIsOpenPlayer,
  } = usePlayer();

  return (
    <Container isOpenPlayer={isOpenPlayer}>
      <ContentHeader>
        <Image
          src={contentPlayer?.thumbnail}
          alt={contentPlayer?.title}
          width={75}
          height={75}
          objectFit="cover"
        />
        <Title variant="h2">{contentPlayer?.title}</Title>
        <CloseButton onClick={() => setIsOpenPlayer(false)}>
          <CloseIcon />
        </CloseButton>
      </ContentHeader>
      <Slider
        value={currentTime}
        onChange={handleChangePlayerTime}
        min={0}
        max={contentPlayer?.duration}
      />
      <audio ref={playerRef} src={contentPlayer?.file?.url} />
      <Controls onClickPlay={handlePlay} isPlaying={isPlaying} />
    </Container>
  );
};

export default Player;
