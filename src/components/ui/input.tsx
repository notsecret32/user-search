import styled from 'styled-components';

type InputSize = 'small' | 'medium' | 'large' | 'full' | string | number;

interface InputProps {
  $size?: InputSize;
}

const getInputSize = (size: InputSize = 'medium'): string | null => {
  if (size === 'small') return `${100}px`;
  if (size === 'medium') return `${200}px`;
  if (size === 'large') return `${300}px`;
  if (typeof size === 'string') return size;
  if (typeof size === 'number') return `${size}px`;
  return null;
};

export const Input = styled.input<InputProps>`
  width: 100%;
  max-width: ${({ $size }) => getInputSize($size)};
  padding: 11px 16px;
  border: 1px solid #dfe4ea;
  border-radius: 6px;
`;
