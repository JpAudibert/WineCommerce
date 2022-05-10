import styled from "styled-components";

export const Container = styled.main`
  padding: 96px 128px 48px;
  width: 100%;
`

export const Products = styled.section`
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(4, 1fr);
`;
