import Container from "@/components/Container";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import Product from "@/components/Product";
import { ProductsList } from "@/styles/products";

interface IProducts {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}

interface IProductProps {
  products: IProducts[];
}

export async function getStaticProps() {
  const data = await fetch('http://localhost:5144/products');

  const products = await data.json();

  return {
    props: { products },
  }
}

export default function Products({ products }: IProductProps) {
  return (
    <>
      <NavigationBar />
      <Container>
        <h2>Produtos</h2>
        <ProductsList>
          {products.map(product => (
            <Product
              key={product.id}
              id={parseInt(product.id)}
              image={product.image}
              title={product.name}
              price={parseFloat(product.price)}
              description={product.description}
            />

          ))}
        </ProductsList>
      </Container>
      <Footer />
    </>
  )
}