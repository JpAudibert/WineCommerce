import styled from "styled-components";

export const NavigationBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ebeb;
  position: fixed;

  width: 100%;
  height: 80px;

  padding: 0 48px;

  a {
    color: #14101f;
    font-size: 18px;
  }

  & > div {
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const BackgroundImage = styled.div`
  display: flex;
  width: 100%;
  height: 552px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const List = styled.main`
  padding: 64px;
  width: 100%;
`

export const Products = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;

`;

export const Product = styled.div`
  margin-top: 32px;
  width: 100%;
  max-width: 256px;

  img {
    height: 256px;
  }

  h3 {
    margin: 8px 0 8px 0;
  }
`;
