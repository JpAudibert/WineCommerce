import { Link } from "react-router-dom";
import { Content } from "./styles";

const NavigationBar: React.FC = () => (
  <Content>
    <div>
      <Link to="/">Wine Commerce</Link>
    </div>
    <div>
      <Link to="/products">Produtos</Link>
      <Link to="/login">Login</Link>
    </div>
  </Content>
)

export default NavigationBar;
