import { render, screen } from '@testing-library/react';

import { CardContent } from '@/components/core/CardContent';
import { MockCardList } from '@/tests/mocks/CardContent';
import { ICardProps } from '@/interfaces/ICardProps';

interface IMockProps {
  MockCardList: ICardProps[];
}

const makesut = (): IMockProps => {
  render(
    <CardContent
      key={MockCardList[0]?.id}
      id={MockCardList[0]?.id}
      title={MockCardList[0]?.title}
      description={MockCardList[0]?.description}
      desktopSrc=""
      createdAt={MockCardList[0]?.createdAt}
    />,
  );

  return {
    MockCardList,
  };
};

describe('Card carrousel - Unit tests', () => {
  it('Should be able to render this component', () => {
    makesut();

    const card = screen.getByTestId('card-content');
    expect(card).toBeInTheDocument();
  });

  it('Should be able be equal values of props into card', () => {
    const { MockCardList } = makesut();

    const cardTitle = screen.getByTestId('title-card');
    expect(cardTitle.textContent).toEqual(MockCardList[0]?.title);
  });
});
