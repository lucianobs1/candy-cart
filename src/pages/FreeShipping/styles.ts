import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;

  header {
    text-align: center;
    padding: 16px 16px;
    border-bottom: 1px solid #B9BCC7;
    margin-bottom: 32px;
  }

  ul {
    margin: 0 auto;
    max-width: 800px;
    width: 100%;

    li {
      display: flex;
      align-items: center;
      gap: 32px;

      & + li {
        margin-top: 16px;
      }

      img {
        height: 110px;
        width: 110px;
      }
    }
  }
`;