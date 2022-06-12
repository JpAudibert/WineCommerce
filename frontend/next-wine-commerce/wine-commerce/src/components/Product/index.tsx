import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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
      <Link href={`/products/${id}`}>
        <>
          <Image
            key={id}
            src={image}
            alt={title}
            height={256}
            width={256}
          />
          <h3>{title}</h3>
          <span>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</span>
          <p>{description}</p>
        </>
      </Link>
    </div>
    <Actions>
      <Link href={""}>
        <Button>
          Adicionar ao carrinho
        </Button>
      </Link>
      <Link href={`/products/${id}`}>
        <Button main>
          Comprar
        </Button>
      </Link>
    </Actions>
  </Content >
)

export default Product
