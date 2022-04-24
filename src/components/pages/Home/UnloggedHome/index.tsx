import { useMemo, useState } from 'react';
import { IFoods } from '../../../../interfaces/IFoodsProps';

import { Container } from '../../../../styles/theme';

export const UnloggedHome = ({ foods }: IFoods) => {
  const foodContent = useMemo(
    () =>
      foods?.map(item => (
        <div key={item?.id}>{item?.name}</div>
      )),
    [foods],
  );

  return (
    <Container>
      <h1>UnloggedHome</h1>
      {foodContent}
    </Container>
  );
};
