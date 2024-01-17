import styled from 'styled-components';
import theme from '../../pages/styles/theme';

export const Container = styled.button`
  display: flex;

  width: fit-content;

  background: ${({ theme }) => theme.COLORS.BLUE};

  margin-top: 2rem;
  margin-left: auto;

  border: none;
  border-radius: 1rem;

  padding: 1.6rem 3.2rem;

  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;

  cursor: pointer;
`;
