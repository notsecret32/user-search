import { render } from '@testing-library/react';
import React from 'react';
import { UserCard } from '../src/components/shared';
import { IUser } from '../src/types';

describe('UserCard', () => {
  it('renders user information', () => {
    const user: Pick<
      IUser,
      'name' | 'username' | 'email' | 'phone' | 'company'
    > = {
      name: 'User 1',
      username: 'user1',
      email: 'user1@example.com',
      phone: '0000 000-00-00',
      company: {
        name: 'Test Company',
        bs: '',
        catchPhrase: '',
      },
    };
    const { getByText } = render(<UserCard {...user} />);
    expect(getByText('User 1')).toBeInTheDocument();
  });
});
