import { Container } from './styles';

export function Form({ title, children }) {
  return (
    <Container onSubmit={(e) => e.preventDefault()}>
      <h3>{title}</h3>
      {children}
    </Container>
  );
}
