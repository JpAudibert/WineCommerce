import styled from 'styled-components';
import { lighten, shade } from 'polished';

interface IButtonProps {
  main?: boolean;
}

export const Content = styled.button<IButtonProps>`
  background: ${props => !props.main ? lighten(0.2, '#342a45') : '#342a45'};

  color: #fff;
  border: 0;
  height: 40px;
  border-radius: 10px;
  padding: 0 16px;
  width: 100%;
  font-weight: 500;
  margin-top: 8px;
  transition: background-color 0.5s;

  &:hover {
    background: ${shade(0.2, '#342a45')};
  }
`;
