import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body * {
    font-family: 'DM Sans';
  }

  h2, h3 {
    font-family: 'Sans';
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: 0.3px;
  }

  .sr-only {
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  position: absolute;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
`;
