import Link from "next/link";
import { Content } from "./styles";

const Footer: React.FC = () => (
  <Content>
    <div>
      <strong>Wine Commerce</strong>
    </div>
    <div>
      <Link href="/">Página inicial</Link>
      <Link href="/products">Produtos</Link>
      <Link href="/login">Login</Link>
    </div>
  </Content>
)

export default Footer;
