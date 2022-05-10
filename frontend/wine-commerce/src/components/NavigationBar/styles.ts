import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #eebbee;

  width: 100%;
  height: 80px;

  padding: 0 128px;

  a {
    color: #1B1725;
    font-size: 18px;
  }

  & > div {
    width: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
