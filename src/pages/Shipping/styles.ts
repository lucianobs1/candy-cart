import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;

  header {
    text-align: center;
    padding: 16px 16px;
    border-bottom: 1px solid #cbcbcb;
    display: flex;
    justify-content: center;
    gap: 8px;

    a {
      display: flex;
      align-items: center;
      transition: color 0.6s;

      &:hover {
        color: #3B74F2;
      }
    }
  }

  ul {
    margin: 32px auto;
    max-width: 500px;
    width: 100%;
    padding: 16px 16px;

    li {
      display: flex;
      align-items: center;
      gap: 32px;

      & + li {
        margin-top: 24px;
      }

      .image-box {
        background-color: #fff;
        border: 1px solid #cbcbcb;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 150px;
        max-height: 130px;
        padding: 6px;
        
        img {
          width: 100%;
          height: 100%;
        }
      }

      strong {
        display: inline-block;
        margin: 8px 0;
      }

      p {
        color: #b1b1b1;
        font-size: 14px;
        text-decoration: line-through;
      }

      span {
        color:#8f8f8f;
        font-weight: bold;
      }
    } 
  }

  .payment-container {
    width: 100%;
    border-bottom: 1px solid #cbcbcb;
    border-top: 1px solid #cbcbcb;

    div {
      max-width: 500px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 32px 16px;
    }

    .shipping-message-box {
      background-color: #C7FFA6;
      max-width: 400px;
      margin: 0 auto;
      margin-bottom: 32px;
      padding: 8px;
      width: 100%;
      border-radius: 9999px;

    p {
      color: #217A00;
      font-weight: bold;
      margin: 0 auto;
    }
  }

  }

  .button-container {
    max-width: 500px;
    padding: 32px 16px;
    margin: 0 auto;
    width: 100%;

    button {
      font-size: 18px;
      background-color: #3B74F2;
      border: none;
      color: #fff;
      font-weight: 700;
      width: 100%;
      height: 48px;
      border-radius: 8px;

      transition: filter 0.6s;

      &:hover {
        filter: brightness(0.6);
      }
    }
  }
`;