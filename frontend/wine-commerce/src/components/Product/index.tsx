import { Link } from "react-router-dom";
import Button from "../Button";
import { Actions, Content } from "./styles";

interface IProductProps {
  id: number
  image: string
  title: string
  price: number
  description: string
}

const Product: React.FC<IProductProps> = ({ id, image, title, price, description }: IProductProps) => (
  <Content>
    <div>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <span>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</span>
        <p>{description}</p>
      </Link>
      <Actions>
        <Link to={""}>
          <Button>
            Adicionar ao carrinho
          </Button>
        </Link>
        <Link to={`/products/${id}`}>
          <Button main>
            Comprar
          </Button>
        </Link>
      </Actions>
    </div>
  </Content >
)

export default Product
