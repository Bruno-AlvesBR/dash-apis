import faker from 'faker';
import { ICardProps } from '@/interfaces/ICardProps';

const MockCardList: ICardProps[] = [
  {
    id: faker.datatype.uuid(),
    title: faker.random.word(),
    description: faker.random.words(),
    createdAt: String(faker.date.recent()),
    url: `http://localhost:3000/${faker.lorem
      .words()
      .split(' ')
      .join('-')}`,
  },
  {
    id: faker.datatype.uuid(),
    title: faker.random.word(),
    description: faker.random.words(),
    createdAt: String(faker.date.recent()),
    url: `http://localhost:3000/${faker.lorem
      .words()
      .split(' ')
      .join('-')}`,
  },
];

export { MockCardList };
