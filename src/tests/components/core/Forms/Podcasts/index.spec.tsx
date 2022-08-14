import {
  render,
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react';
import faker from 'faker';

import PodcastForm from '@/components/core/Forms/Podcast';
import { IPodcastProps } from '@/interfaces/IPodcastProps';
import { createMockRouter } from '@/tests/mocks/Providers/MockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';

const makeSut = (router = createMockRouter({})) => {
  const mockList = {
    id: faker.datatype.uuid(),
    title: faker.name.title(),
    description: faker.lorem.paragraph(),
    createdAt: String(faker.date.past()),
    fileDuration: faker.datatype.number(),
    fileType: faker.random.word(),
    fileUrl: faker.internet.url(),
    members: faker.internet.userName(),
    publishedAt: String(faker.date.recent()),
    thumbnail: faker.image.imageUrl(),
  };

  const podcastEnum = [
    'id',
    'title',
    'description',
    'members',
    'fileDuration',
    'fileType',
    'fileUrl',
    'thumbnail',
  ];

  render(
    <RouterContext.Provider value={router}>
      <PodcastForm handlePodcastSubmit={() => {}} />
    </RouterContext.Provider>,
  );

  return {
    mockList,
    podcastEnum,
  };
};

describe('Podcasts Form - Unit tests', () => {
  it('Should be able to write on inputs', async () => {
    const { mockList, podcastEnum } = makeSut();

    await waitFor(() => {
      podcastEnum.map((item, index) => {
        fireEvent.change(
          screen.queryAllByTestId('input-form')[index],
          {
            target: { value: mockList[item] },
          },
        );
      });
    });

    podcastEnum.map((item, index) => {
      expect(
        screen.queryAllByTestId('input-form')[index],
      ).toHaveValue(mockList[item]);
    });
  });
});
