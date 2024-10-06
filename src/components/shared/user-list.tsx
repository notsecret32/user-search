import { ErrorLabel, UserCard } from '@/components/shared';
import { IUser } from '@/types';
import { FC } from 'react';
import styled from 'styled-components';

interface UserListProps {
  users: IUser[];
}

export const UserList: FC<UserListProps> = ({ users }) => {
  return users && users.length > 0 ? (
    <Container>
      {users.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
    </Container>
  ) : (
    <ErrorLabel>Пользователи не найдены</ErrorLabel>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;
