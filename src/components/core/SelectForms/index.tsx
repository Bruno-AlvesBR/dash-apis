import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { memo, useEffect } from 'react';

import { useFood } from '@/hooks/Product';
import { useUser } from '@/hooks/User';

import { Container, Title, ButtonSelect } from './styles';

const SelectForms: React.FC = () => {
  const [
    { setSelectCompleted, setFormType, formType },
    { user },
  ] = [useFood(), useUser()];

  const handleSelectValue = (event: any) => {
    if (event) {
      setFormType(event);
      localStorage.setItem('formulario', event);
    }
  };

  const handleClick = () => {
    return user?.id && formType && setSelectCompleted(true);
  };

  useEffect(() => {
    if (!user?.id) {
      localStorage.removeItem('formulario');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  return (
    <Container>
      <Title>Selecione formulário</Title>
      <Select
        labelId="select-label"
        id="select"
        value={formType}
        onChange={e => handleSelectValue(e.target.value)}
      >
        <MenuItem value={'ecommerce'}>e-commerce</MenuItem>
        <MenuItem value={'podcast'}>podcast</MenuItem>
        <MenuItem value={'videos'}>videos</MenuItem>
      </Select>
      <ButtonSelect onClick={handleClick}>
        Confirmar
      </ButtonSelect>
    </Container>
  );
};

export default memo(SelectForms);
