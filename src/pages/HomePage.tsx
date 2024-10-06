import { UserList } from '@/components/shared';
import { Button, Input } from '@/components/ui';
import { useUsersStore } from '@/store';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

export const HomePage: FC = () => {
  const [name, setName] = useState('');

  const { users, getUsersByName } = useUsersStore(state => state);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      getUsersByName(name);
    }
  };

  useEffect(() => {
    getUsersByName('');
  }, [getUsersByName]);

  return (
    <Container>
      <Title>Поиск пользователя</Title>
      <SearchBlock>
        <Input
          placeholder='Имя пользователя'
          onKeyDown={handleKeyDown}
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <Button onClick={() => getUsersByName(name)}>Поиск</Button>
      </SearchBlock>
      <UserList users={users} />
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 1000px;
  margin: 20px auto;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 600;
  margin: 0;
`;

const SearchBlock = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
