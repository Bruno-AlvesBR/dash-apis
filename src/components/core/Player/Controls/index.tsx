import PlayIcon from '@mui/icons-material/PlayArrow';
import ArrowBackIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightIcon from '@mui/icons-material/ArrowRightOutlined';
import PauseIcon from '@mui/icons-material/Pause';

import { Container, ContentButton } from './styles';

interface IControlsProps {
  onClickPrevious?(): void;
  onClickPlay(): void;
  onClickNext?(): void;
  isPlaying: boolean;
}

export const Controls: React.FC<IControlsProps> = ({
  onClickPrevious,
  onClickPlay,
  onClickNext,
  isPlaying,
}) => (
  <Container>
    <ContentButton onClick={onClickPrevious}>
      <ArrowBackIcon />
    </ContentButton>
    <ContentButton onClick={onClickPlay}>
      {isPlaying ? <PlayIcon /> : <PauseIcon />}
    </ContentButton>
    <ContentButton onClick={onClickNext}>
      <ArrowRightIcon />
    </ContentButton>
  </Container>
);
