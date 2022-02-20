import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  color: #fff;
  margin: 0 auto;
  max-width: 500px;
  width: 100%;

  header {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    border-bottom: 1px solid #fff;
    padding: 40px;
  }

  button {
    background-color: #3b74f2;
    color: #fff;
    font-weight: bold;
    border: none;
    width: 100%;
    height: 48px;
    border-radius: 6px;
    margin: 32px 0;

    transition: filter 0.4s;

    &:hover {
      filter: brightness(0.4);
    }
  }

  .payment-container {
    display: flex;
    padding: 24px 0;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1128px;
      width: 100%;
      margin: 0 auto;
      padding: 0 32px;

      strong {
        font-size: 24px;
      }
    }
  }
`;

export const CandyContent = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 1128px;
  padding: 0 32px;
  margin: 40px auto;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;

    & + li {
      margin-top: 24px;
    }

    img {
      height: 120px;
      width: 120px;
    }

    strong {
      display: inline-block;
      font-size: 18px;
      margin-bottom: 20px;
    }

    p {
      color: #eadbff;
    }

    span {
      display: inline-block;
      font-weight: 700;
      font-size: 18px;
      margin-top: 12px;
    } 
  }
`;