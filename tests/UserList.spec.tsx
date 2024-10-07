import { render } from '@testing-library/react';
import React from 'react';
import { UserList } from '../src/components/shared';
import { IUser } from '../src/types';

describe('UserList', () => {
  it('renders user cards when users are present', () => {
    const users: IUser[] = [
      {
        id: 1,
        name: 'User 1',
        username: 'user1',
        address: {
          city: 'City 1',
          street: 'Street 1',
          suite: 'Suite 1',
          zipCode: '1',
          geo: { lat: '0', lng: '0' },
        },
        email: 'user1@test.com',
        phone: '1111 11 111-11-11',
        website: 'user1.test.com',
        company: {
          bs: 'test user 1',
          catchPhrase: 'test user 1',
          name: 'Test Company 1',
        },
      },
      {
        id: 2,
        name: 'User 2',
        username: 'user2',
        address: {
          city: 'City 2',
          street: 'Street 2',
          suite: 'Suite 2',
          zipCode: '2',
          geo: { lat: '0', lng: '0' },
        },
        email: 'user2@test.com',
        phone: '2222 22 222-22-22',
        website: 'user2.test.com',
        company: {
          bs: 'test user 2',
          catchPhrase: 'test user 2',
          name: 'Test Company 2',
        },
      },
    ];

    const { getAllByText } = render(<UserList users={users} />);
    expect(getAllByText('User 1')).toHaveLength(1);
    expect(getAllByText('User 2')).toHaveLength(1);
  });

  it('renders error message when users are not found', () => {
    const { getByText } = render(<UserList users={[]} />);
    expect(getByText('Пользователи не найдены')).toBeInTheDocument();
  });
});
