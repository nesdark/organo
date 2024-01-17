import { Container } from './styles';

export function Collaborator({ name, role, image, $backgroundColor }) {

  debugger

  return (
    <Container $backgroundColor={$backgroundColor}>
      <div className="header">
        <img src={image} alt="Vinicios Neves" />
      </div>

      <div className="footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </Container>
  );
}
