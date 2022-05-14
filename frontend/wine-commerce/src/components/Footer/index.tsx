import { Link } from "react-router-dom";
import { Content } from "./styles";

const Footer: React.FC = () => (
  <Content>
    <div>
      <strong>Wine Commerce</strong>
    </div>
    <div>
      <Link to="/">Página inicial</Link>
      <Link to="/products">Produtos</Link>
      <Link to="/login">Login</Link>
    </div>
  </Content>
)

export default Footer;
