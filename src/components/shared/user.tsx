import { IUser } from '@/types';
import { FC } from 'react';
import styled from 'styled-components';
import { Avatar } from './avatar';

type UserProps = IUser;

export const User: FC<UserProps> = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <Card>
      <CardHeader>
        <Avatar>{name[0].toUpperCase()}</Avatar>
        <CardInitials>
          <h1>{name}</h1>
          <p>{username}</p>
        </CardInitials>
      </CardHeader>
    </Card>
  );
};

const Card = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #e4e4e7;
  border-radius: 8px;
  background-color: #fff;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CardInitials = styled.div`
  h1 {
    font-size: 20px;
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }

  p {
    font-size: 14px;
    color: #71737e;
  }
`;
