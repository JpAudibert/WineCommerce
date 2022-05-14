import { ButtonHTMLAttributes } from "react";
import { Content } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  main?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, main, ...rest }) => {
  return (
    <Content type="button" {...rest} main={main}>
      {loading ? 'Carregando...' : children}
    </Content>
  )
}

export default Button;
