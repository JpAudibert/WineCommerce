import Link from "next/link";
import { Content } from "./styles";
import { FaShoppingCart } from 'react-icons/fa';

const NavigationBar: React.FC = () => (
  <Content>
    <div>
      <Link href="/">Wine Commerce</Link>
    </div>
    <div>
      <Link href="/catalog/products">Produtos</Link>
      <Link href="/login">Login</Link>
      <span><FaShoppingCart height={24} width={24} color={'#fff'} /></span>
    </div>
  </Content>
)

export default NavigationBar;
