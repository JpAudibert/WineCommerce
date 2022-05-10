import { Link } from "react-router-dom";
import { Container } from "./styles";

const Footer: React.FC = () => (
  <Container>
    <div>
      <strong>Wine Commerce</strong>
    </div>
    <div>
      <Link to="/">Página inicial</Link>
      <Link to="/products">Produtos</Link>
      <Link to="/login">Login</Link>
    </div>
  </Container>
)

export default Footer;
