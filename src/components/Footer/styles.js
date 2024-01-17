import styled from 'styled-components';
import theme from '../../pages/styles/theme';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.BLUE};

  padding: 4.5rem 8rem;

  img {
    height: 4rem;
  }

  p {
    font-size: 1.4rem;
    color: #fff;
  }
`;
