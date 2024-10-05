import { UserList } from '@/components/shared';
import { Button, Input } from '@/components/ui';
import { useUsersStore } from '@/store';
import { FC, useState } from 'react';
import styled from 'styled-components';

export const HomePage: FC = () => {
  const [name, setName] = useState('');

  const { users, getUsersByName } = useUsersStore(state => state);

  return (
    <Container>
      <Title>Поиск пользователя</Title>
      <SearchBlock>
        <Input
          placeholder='Имя пользователя'
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
  max-width: max-content;
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
