import { Link } from "react-router-dom";
import { Container, Actions } from "./styles";

interface IProductProps {
  id: number
  image: string
  title: string
  price: number
  description: string
}

const Product: React.FC<IProductProps> = ({ id, image, title, price, description }: IProductProps) => (
  <Container>
    <div>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <span>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</span>
        <p>{description}</p>
      </Link>
      <Actions>
        <Link to={""}>
          <button type="button">
            Adicionar ao carrinho
          </button>
        </Link>
        <Link to={`/products/${id}`}>
          <button type="button">
            Comprar
          </button>
        </Link>
      </Actions>
    </div>
  </Container >
)

export default Product
