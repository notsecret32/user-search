import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { HomePage } from '../src/pages';

describe('HomePage', () => {
  it('renders title and search input', () => {
    const { getByText, getByPlaceholderText } = render(<HomePage />);
    expect(getByText('Поиск пользователя')).toBeInTheDocument();
    expect(getByPlaceholderText('Имя пользователя')).toBeInTheDocument();
  });
});
