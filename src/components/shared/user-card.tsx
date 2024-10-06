import { Avatar, Card, CardContent, CardHeader } from '@/components/ui';
import { IUser } from '@/types';
import { Briefcase, Mail, Phone } from 'lucide-react';
import { FC } from 'react';
import styled from 'styled-components';

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
        <Initials>
          <h1>{name}</h1>
          <p>{username}</p>
        </Initials>
      </CardHeader>
      <CardContent>
        <Row>
          <Mail />
          <p>{email}</p>
        </Row>
        <Row>
          <Phone />
          <p>{phone}</p>
        </Row>
        <Row>
          <Briefcase />
          <p>{company.name}</p>
        </Row>
      </CardContent>
    </Card>
  );
};

const Initials = styled.div`
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

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: #71737e;
    width: 20px;
  }
`;
