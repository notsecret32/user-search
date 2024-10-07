import { ErrorLabel, UserList, UserSearch } from '@/components/shared';
import { useUsersStore } from '@/store';
import { FC, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

export const HomePage: FC = () => {
  const { users, isLoading, error, getUsersByName } = useUsersStore(
    state => state
  );

  useEffect(() => {
    getUsersByName('');
  }, []);

  return (
    <Container>
      <Title>Поиск пользователя</Title>
      <UserSearch />
      {isLoading ? (
        <Loader>
          <ClipLoader color='#3758f9' loading={isLoading} />
        </Loader>
      ) : error ? (
        <ErrorLabel>{error}</ErrorLabel>
      ) : (
        <UserList users={users} />
      )}
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

const Loader = styled.div`
  margin: 0 auto;
`;
