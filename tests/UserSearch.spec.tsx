import { render } from '@testing-library/react';
import React from 'react';
import { UserSearch } from '../src/components/shared';

describe('UserSearch', () => {
  it('renders search input and button', () => {
    const { getByPlaceholderText, getByText } = render(<UserSearch />);
    expect(getByPlaceholderText('Имя пользователя')).toBeInTheDocument();
    expect(getByText('Поиск')).toBeInTheDocument();
  });
});
