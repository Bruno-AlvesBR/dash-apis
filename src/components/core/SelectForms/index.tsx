import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { memo } from 'react';

import { useFood } from '../../../hooks/Product';

import { Container, Title, ButtonSelect } from './styles';

const SelectForms: React.FC = () => {
  const [{ setSelectCompleted, setFormType, formType }] = [useFood()];

  const handleSelectValue = (event: any) => {
    if (event) {
      setFormType(event);
      localStorage.setItem('formulario', event);
    }
  };

  return (
    <Container>
      <Title>Selecione formulário</Title>
      <Select
        labelId="select-label"
        id="select"
        value={formType}
        onChange={e => handleSelectValue(e.target.value)}
      >
        <MenuItem value={'e-commerce'}>e-commerce</MenuItem>
        <MenuItem value={'podcast'}>podcast</MenuItem>
      </Select>
      <ButtonSelect onClick={() => formType && setSelectCompleted(true)}>
        Confirmar
      </ButtonSelect>
    </Container>
  );
};

export default memo(SelectForms);
