import banner from "@/assets/banner.jpg"
import history from "@/assets/history.jpg"
import Container from "@/components/Container"
import Footer from "@/components/Footer"
import NavigationBar from "@/components/NavigationBar"
import Product from "@/components/Product"
import { BackgroundImage, DescriptionItem, Descriptions, Products } from "@/styles/home"
import Image from "next/image"

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
  const data = await fetch('http://localhost:5144/products?limit=4');

  const products = await data.json();

  return {
    props: { products },
  }
}

export default function Home({ products }: IProductProps) {
  return (
    <>
      <NavigationBar />
      <BackgroundImage>
        <Image key={1} src={banner} alt="banner" />
      </BackgroundImage>
      <Container>
        <h2>Produtos em Destaque</h2>
        <Products>
          {products.map(product => (
            <Product
              key={product.id}
              id={parseInt(product.id)}
              image={product.image}
              title={product.name}
              price={parseFloat(product.price)}
              description={product.description}
            />
          ))
          }
        </Products>
      </Container>
      <Footer />
    </>
  );
}
