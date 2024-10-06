import styled from 'styled-components';

interface AvatarProps {
  $width?: number;
}

export const Avatar = styled.div<AvatarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $width }) => ($width ? `${$width}px` : '48px')};
  height: ${({ $width }) => ($width ? `${$width}px` : '48px')};
  border-radius: 100%;
  background-color: #f4f4f5;
`;
