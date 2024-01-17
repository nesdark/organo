import styled from 'styled-components';

export const Container = styled.section`
  padding: 3.2rem;

  background-color: ${({ $secondaryColor }) => $secondaryColor};

  text-align: center;
`;

export const Divider = styled.div`
  width: 40px;
  height: 4px;

  margin: 0.8rem auto 0;

  background: ${({ $primaryColor }) => $primaryColor};
`;
