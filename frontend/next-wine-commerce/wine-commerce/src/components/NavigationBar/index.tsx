import Link from "next/link";
import { Content } from "./styles";

const NavigationBar: React.FC = () => (
  <Content>
    <div>
      <Link href="/">Wine Commerce</Link>
    </div>
    <div>
      <Link href="/catalog/products">Produtos</Link>
      <Link href="/login">Login</Link>
    </div>
  </Content>
)

export default NavigationBar;
