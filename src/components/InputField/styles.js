import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  font-size: 1.8rem;
  font-weight: 600;

  margin-bottom: 1.2rem;

  input {
    background-color: #ffffff;

    border: none;
    border-radius: 0.8rem;
    box-shadow: 1rem 1rem 3rem rgba(0, 0, 0, 0.08);

    padding: 1.6rem 3.2rem;

    font-size: 2rem;
  }
`;
