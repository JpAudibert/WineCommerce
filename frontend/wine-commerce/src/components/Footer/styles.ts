import styled from "styled-components";

export const Content = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 160px;
  background: #1b1725;
  color: #fff;
  padding: 0 128px;

  strong {
    font-size: 24px;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: 18px;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
