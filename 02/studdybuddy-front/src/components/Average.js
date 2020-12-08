import styled from 'styled-components';

export const Average = styled.div`
  background-color: ${({ value }) => {
  if (value > 4) return '#00E08A';
  if (value > 3) return '#FFD82B';
  if (value < 3) return '#FF442B';
  return 'lightgrey';
}};
  flex-shrink: 0;
  font-weight: bold;
  height: 90px;
  justify-self: center;
  width: 90px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;
