import { render, screen } from '@testing-library/react';
import BannerCreateProduct from '@/components/core/BannerCreateProduct';

describe('Test - Unit test', () => {
  it('Should be able to render this component', () => {
    render(<BannerCreateProduct />);

    expect(screen.getByTestId('banner-home')).not.toBeNull();
  });
});
