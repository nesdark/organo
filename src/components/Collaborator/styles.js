import styled from 'styled-components';

export const Container = styled.div`
  width: 28rem;


  margin: 2rem auto 4rem ;

  .header {
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    border-radius: 1rem 1rem 0px 0px;
  }

  img {
    width: 10rem;

    clip-path: circle();
    object-fit: cover;

    position: relative;
    bottom: -5rem;
  }

  .footer {
    background: #ffffff;
    box-shadow: 0.5rem 0.5rem 1.5rem rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-top: 9rem;
    padding-bottom: 4rem;
  }

  .footer h4 {
    color: #6278f7;
    font-size: 1.8rem;
    line-height: 2.2rem;
    font-weight: bold;
    margin-bottom: 0.8rem;
  }

  .footer h5 {
    font-size: 1.8rem;
    line-height: 2.2rem;
    color: #212121;
    padding: 0 1.6rem;
  }
`;
