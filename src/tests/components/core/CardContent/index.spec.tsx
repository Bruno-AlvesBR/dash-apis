import { fireEvent, render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { NextRouter } from 'next/router';

import { CardContent } from '@/components/core/CardContent';
import { MockCardList } from '@/tests/mocks/CardContent';
import { ICardProps } from '@/interfaces/ICardProps';
import { createMockRouter } from '@/tests/mocks/Providers/MockRouter';

interface IMockProps {
  MockCardList: ICardProps[];
  router: NextRouter;
}

const makesut = (router = createMockRouter({})): IMockProps => {
  render(
    <RouterContext.Provider value={router}>
      <CardContent
        id={MockCardList[0]?.id}
        title={MockCardList[0]?.title}
        description={MockCardList[0]?.description}
        desktopSrc=""
        createdAt={MockCardList[0]?.createdAt}
        slug={MockCardList[0]?.slug}
      />
    </RouterContext.Provider>,
  );

  return {
    MockCardList,
    router,
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

  it('Should be able to be redirected after click in edit', () => {
    const { router, MockCardList } = makesut();

    fireEvent.click(screen.getByTestId('edit-button-card'));
    expect(router.push).toBeCalledWith(`/produtos/${MockCardList[0]?.slug}`);
  });
});
