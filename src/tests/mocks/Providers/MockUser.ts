import faker from 'faker';

import { IUserProps } from '@/interfaces/IUserProps';

export const MockUser = () => {
  return {
    onsubmit: jest.fn(),
    user: {} as IUserProps,
    userId: faker.datatype.uuid(),
    noAdmin: faker.datatype.boolean(),
    isInvalid: faker.datatype.boolean(),
    isLoadingUser: faker.datatype.boolean(),
  };
};
