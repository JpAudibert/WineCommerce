import styled from "styled-components";
import { lighten } from 'polished';

export const Content = styled.article`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  padding: 16px 0;
  width: 100%;
  border-radius: 5px;
  border: solid #eef 1px;
  box-shadow: 0 0 1em rgba(0,0,0, 0.08);

  a {
    color: inherit;
  }

  img {
    height: 256px;
  }

  h3 {
    margin: 8px 0;
  }

  span {
    color: #777;
    line-height: 24px;
  }

  div {
    max-width: 256px;
  }

  &:hover {
    box-shadow: 0 0 1em rgba(0,0,0, 0.3);
    transition: box-shadow 0.5s;
  }
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
