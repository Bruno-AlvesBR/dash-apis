import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import faker from 'faker';

import { FormLogin } from '@/components/core/FormLogin';
import { UserContext } from '@/hooks/User';
import { MockUser } from '@/tests/mocks/Providers/MockUser';

const mockRender = (user = MockUser()) => {
  const anonymousUser = {
    email: faker.internet.email(),
    password: faker.internet.password(),
  };

  render(
    <UserContext.Provider value={user}>
      <FormLogin />
    </UserContext.Provider>,
  );

  return { user, anonymousUser };
};

describe('Form login - Unit tests', () => {
  it('Should be able to render this component', () => {
    mockRender();

    expect(screen.getByTestId('form-content')).toBeInTheDocument();
  });

  it('Should be able to write on inputs', async () => {
    const { anonymousUser } = mockRender();

    const inputEmail = screen.queryAllByTestId('input-login')[0];
    const inputPassword = screen.queryAllByTestId('input-login')[1];

    await waitFor(() => {
      fireEvent.change(inputEmail, {
        target: { value: anonymousUser.email },
      });

      fireEvent.change(inputPassword, {
        target: { value: anonymousUser.password },
      });
    });

    expect(inputEmail).toHaveValue(anonymousUser.email);
    expect(inputPassword).toHaveValue(anonymousUser.password);
  });

  it('Should be able to click on button', () => {});
});
