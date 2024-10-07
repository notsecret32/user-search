import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { HomePage } from '../src/pages';

describe('HomePage component', () => {
  it('renders correctly', () => {
    render(<HomePage />);
    expect(screen.getByText('Поиск пользователя')).toBeInTheDocument();
  });
});
