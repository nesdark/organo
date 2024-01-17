import { Container } from './styles';

export function SelectField({ title, options, ...rest }) {
  return (
    <Container>
      {title}
      <select {...rest}>
        <option value="">Selecione uma opção</option>
        {options.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </Container>
  );
}
