import { IUser } from '@/types';
import { FC } from 'react';
import styled from 'styled-components';
import { User } from './user';

interface UserListProps {
  users: IUser[];
}

export const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <Container>
      {users && users.length > 0 ? (
        users.map(user => <User key={user.id} {...user} />)
      ) : (
        <Error>Пользователи не найдены</Error>
      )}
    </Container>
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
