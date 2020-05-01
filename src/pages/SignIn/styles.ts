import styled from 'styled-components';
import { shade } from 'polished';

import signUpBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch; /* faz os itens o tamanho total da pag */
`;

export const Content = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center; /* centraliza eixo X e Y */
  height: 500px;
  width: 100%;
  max-width: 500px;

  img {
    width: 210px;
  }

  form {
    h1 {
      font-size: 25px;
    }

    margin: 40px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 20px;
    text-decoration: none;
    transition: color 0.2;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackground}) no-repeat center;
  background-size: cover;
`;
