import { Container } from './styles';

export function InputField({ title, type, placeholder, ...rest }) {
  return (
    <Container>
      {title}
      <input type={type} placeholder={placeholder} {...rest} />
    </Container>
  );
}