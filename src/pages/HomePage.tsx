import { UserList, UserSearch } from '@/components/shared';
import { useUsersStore } from '@/store';
import { FC, useEffect } from 'react';
import styled from 'styled-components';

export const HomePage: FC = () => {
  const { users, getUsersByName } = useUsersStore(state => state);

  useEffect(() => {
    getUsersByName('');
  }, [getUsersByName]);

  return (
    <Container>
      <Title>Поиск пользователя</Title>
      <UserSearch />
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
