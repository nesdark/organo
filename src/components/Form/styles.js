import styled from 'styled-components';
import theme from '../../pages/styles/theme';

export const Container = styled.form`
  width: 80%;
  max-width: 80rem;

  margin: 2.4rem auto 7rem;

  border-radius: 2rem;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.08);

  padding: 3.6rem 6.4rem;

  background-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};

  h3 {
    margin-bottom: 2rem;
  }
`;
