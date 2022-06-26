import { CardContent } from '@/components/core/CardContent';
import Carrousel from '@/components/core/Carrousel';
import { ICardProps } from '@/interfaces/ICardProps';
import { MockCardList } from '@/tests/mocks/CardContent';
import { fireEvent, render, screen } from '@testing-library/react';

interface IMockProps {
  MockCardList: ICardProps[];
}

const renderMock = (): IMockProps => {
  render(
    <Carrousel desktopWidth={300} mobileWidth={250}>
      {MockCardList?.map(item => (
        <CardContent key={item?.id} {...item} />
      ))}
    </Carrousel>,
  );

  return {
    MockCardList,
  };
};

describe('Carrousel - Unit tests', () => {
  it('Should be able to render this component', () => {
    renderMock();

    expect(screen.getByTestId('carrousel')).toBeInTheDocument();
  });

  it('Should be able to click on the carrousel buttons', () => {
    renderMock();

    fireEvent.click(screen.queryAllByTestId('carrousel-button')[0]);
    fireEvent.click(screen.queryAllByTestId('carrousel-button')[1]);
  });
});
