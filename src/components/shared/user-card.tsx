import { IUser } from '@/types';
import { Briefcase, Mail, Phone } from 'lucide-react';
import { FC } from 'react';
import styled from 'styled-components';
import { Avatar } from './avatar';

type UserProps = IUser;

export const UserCard: FC<UserProps> = ({
  name,
  username,
  email,
  phone,
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
      <CardContent>
        <CardRow>
          <Mail />
          <p>{email}</p>
        </CardRow>
        <CardRow>
          <Phone />
          <p>{phone}</p>
        </CardRow>
        <CardRow>
          <Briefcase />
          <p>{company.name}</p>
        </CardRow>
      </CardContent>
    </Card>
  );
};

const Card = styled.div`
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

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0 10px 12px;
`;

const CardRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: #71737e;
    width: 20px;
  }
`;
