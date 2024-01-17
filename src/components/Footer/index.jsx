import { SocialLinks } from "../SocialLinks";

import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <SocialLinks />
      <img src="../../../public/logo.png" alt="Organo Logo" />
      <p>Desenvolvido por Alura.</p>
    </Container>
  )
}