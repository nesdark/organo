import styled from 'styled-components';
import theme from '../../pages/styles/theme';

export const Container = styled.header`
  display: flex;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.BLUE};

  img {
    max-width: 100%;
  }
`;
