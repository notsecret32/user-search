import { Button, Input } from '@/components/ui';
import { useUsersStore } from '@/store';
import { FC, useState } from 'react';
import styled from 'styled-components';

export const UserSearch: FC = () => {
  const [name, setName] = useState('');

  const { getUsersByName } = useUsersStore(state => state);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      getUsersByName(name);
    }
  };

  return (
    <SearchBlock>
      <Input
        placeholder='Имя пользователя'
        onKeyDown={handleKeyDown}
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <Button onClick={() => getUsersByName(name)}>Поиск</Button>
    </SearchBlock>
  );
};

const SearchBlock = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
