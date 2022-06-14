import styled from "styled-components";

export const LoginContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 13%;

  border: solid 1px #1b1725;
  border-radius: 15px;
`;

export const FormItems = styled.form`
  div {
    margin-top: 8px;
  }

  & > div {
    margin-bottom: 16px;
  }

  span {
    margin-right: 36px;
    font-size: 20px;
  }

  input {
    height: 30px;
    width: 256px;
  }
`;
