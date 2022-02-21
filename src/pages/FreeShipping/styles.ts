import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;

  header {
    text-align: center;
    padding: 16px 16px;
    border-bottom: 1px solid #B9BCC7;
  }

  ul {
    margin: 32px auto;
    max-width: 500px;
    width: 100%;
    padding: 32px 16px;

    li {
      display: flex;
      align-items: center;
      gap: 32px;

      & + li {
        margin-top: 24px;
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
        color: #B9BCC7;
        font-weight: bold;
      }

      img {
        height: 110px;
        width: 110px;
      }
    }
  }

  .payment-container {
    width: 100%;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;

    div {
      max-width: 500px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 32px 16px;
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
    }
  }
`;