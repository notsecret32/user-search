import styled from 'styled-components';

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

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0 10px 12px;
`;

export { Card, CardContent, CardHeader };
