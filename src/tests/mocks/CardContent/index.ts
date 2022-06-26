import faker from 'faker';
import { ICardProps } from '@/interfaces/ICardProps';

const MockCardList: ICardProps[] = [
  {
    id: faker.datatype.uuid(),
    title: faker.random.word(),
    slug: faker.random.word(),
    description: faker.random.words(),
    createdAt: String(faker.date.recent()),
  },
  {
    id: faker.datatype.uuid(),
    title: faker.random.word(),
    slug: faker.random.word(),
    description: faker.random.words(),
    createdAt: String(faker.date.recent()),
  },
];

export { MockCardList };
