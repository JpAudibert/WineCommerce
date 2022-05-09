import styled from "styled-components";

interface IDescriptionItemProps {
  isImageLeft: boolean
}

export const NavigationBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #eebbee;
  position: fixed;

  width: 100%;
  height: 80px;

  padding: 0 128px;

  a {
    color: #1B1725;
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
  height: 640px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Container = styled.main`
  padding: 96px 128px;
  width: 100%;
`

export const Products = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;

`;

export const Product = styled.article`
  margin-top: 32px;
  width: 100%;
  max-width: 256px;

  a {
    color: inherit;
  }

  img {
    height: 256px;
  }

  h3 {
    margin: 8px 0 8px 0;
  }
`;

export const Descriptions = styled.section`
  margin: 48px 0;
`;

export const DescriptionItem = styled.article<IDescriptionItemProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => props.isImageLeft ? 'row' : 'row-reverse'};

  & + article {
    margin-top: 32px;

  }

  h2 {
    margin-bottom: 16px;
  }

  img {
    width: 49%;
    ${props => props.isImageLeft ? 'margin-right: 2%;' : 'margin-left: 2%;'}
  }
`;
