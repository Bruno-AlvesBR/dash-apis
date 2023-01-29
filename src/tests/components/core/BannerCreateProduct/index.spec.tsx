import { render, screen } from '@testing-library/react';

import BannerCreateProduct from '@/components/core/BannerCreateProduct';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '@/tests/mocks/Providers/MockRouter';

const mockRender = (router = createMockRouter({})) => {
  render(
    <RouterContext.Provider value={router}>
      <BannerCreateProduct />
    </RouterContext.Provider>,
  );

  return { router };
};

describe('Banner Product - Unit test', () => {
  it('Should be able to render this component', () => {
    mockRender();

    expect(screen.getByTestId('banner-home')).toBeInTheDocument();
  });
});
