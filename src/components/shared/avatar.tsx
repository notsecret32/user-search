import { FC } from 'react';
import styled from 'styled-components';

interface AvatarProps {
  children: React.ReactNode;
}

export const Avatar: FC<AvatarProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background-color: #f4f4f5;
`;
