import { useEffect, useState } from 'react';

import { useThemeMode } from '@/hooks/theme';

import { Container } from './styles';

const ModeButton: React.FC = () => {
  const { toggleColorMode } = useThemeMode();

  const [checked, setChecked] = useState(false);

  const handleToggleMode = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setChecked(event?.target.checked);
    toggleColorMode(event?.target.checked);
  };

  useEffect(() => {
    const mode = localStorage.getItem('isDark');
    const formatedMode = mode === 'true' ? true : false;

    if (formatedMode) {
      setChecked(formatedMode);
      toggleColorMode(formatedMode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Container checked={checked} onChange={handleToggleMode} />;
};

export default ModeButton;
