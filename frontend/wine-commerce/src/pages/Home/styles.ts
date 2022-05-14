import styled from "styled-components";

interface IDescriptionItemProps {
  isImageLeft: boolean
}

export const BackgroundImage = styled.div`
  display: flex;
  width: 100%;
  height: 640px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Products = styled.section`
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(4, 1fr);
`;

export const Descriptions = styled.section`
  margin: 64px 0;
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
