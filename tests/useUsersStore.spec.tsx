import { renderHook } from '@testing-library/react-hooks';
import { useUsersStore } from '../src/store';

describe('useUsersStore', () => {
  it('initializes with empty users and no error', () => {
    const { result } = renderHook(() => useUsersStore());
    expect(result.current.users).toEqual([]);
    expect(result.current.error).toBe('');
  });
});
