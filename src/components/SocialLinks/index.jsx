import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import { Container } from './styles';

export function SocialLinks() {
  return (
    <Container>
      <li>
        <a href="">
          <div className="sr-only">Facebook</div>
          <FaFacebook color='white'/>
        </a>
      </li>
      <li>
        <div className="sr-only">Twitter</div>
        <FaTwitter color='white'/>
      </li>
      <li>
        <div className="sr-only">Instagram</div>
        <FaInstagram color='white'/>
      </li>
    </Container>
  );
}
