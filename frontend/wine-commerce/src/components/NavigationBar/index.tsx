import { Link } from "react-router-dom";
import { Container } from "./styles";

const NavigationBar: React.FC = () => (
  <Container>
    <div>
      <Link to="/">Wine Commerce</Link>
    </div>
    <div>
      <Link to="/products">Produtos</Link>
      <Link to="/login">Login</Link>
    </div>
  </Container>
)

export default NavigationBar;
