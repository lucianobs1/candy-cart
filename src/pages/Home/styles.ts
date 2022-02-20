import styled from 'styled-components';
import candyImage from '../../assets/candy.png'



export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
  
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 700px;
    background: #e5e1ff;

    h1 {
      font-size: 80px;
      margin-bottom: 1rem;
    }

    .candy-text-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4rem;
      
      img {
        height: 56px;
        width: 56px;
        margin: 0 8px;
      }
    }

    p, strong {
      font-size: 2rem;
    }

    p {
      margin-left: 6px;
    }

    a {
      text-decoration: none;
      color: #fff;
      background: #6D72F0;
      font-weight: 700;
      text-transform: uppercase;
      padding: 2rem;
      border-radius: 2rem;
      transition: filter 0.6s;

      & + a {
        margin-top: 2rem;
      }

      &:hover {
        filter: brightness(0.9);
      }
      
      &:last-child {
        background-color: #F96361;
      }
    }
  }
`;

export const ImageContainer = styled.image`
  height: 100vh;
  width: 1200px;
  background: #6D72F0 url(${candyImage}) no-repeat center;
  background-size: auto;
  flex: 1;
`;


