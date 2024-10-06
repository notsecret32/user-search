import { IUser } from '@/types';
import { FC } from 'react';
import styled from 'styled-components';
import { UserCard } from './user-card';

interface UserListProps {
  users: IUser[];
}

export const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <>
      {users && users.length > 0 ? (
        <Container>
          {users.map(user => (
            <UserCard key={user.id} {...user} />
          ))}
        </Container>
      ) : (
        <Error>Пользователи не найдены</Error>
      )}
    </>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const Error = styled.p`
  text-align: center;
  margin: 0;
`;
