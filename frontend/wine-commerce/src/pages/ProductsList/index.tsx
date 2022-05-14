import example from "../../assets/example.jpg";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import Product from "../../components/Product";
import { Products } from "./styles";

const PorductsList: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <h2>Produtos</h2>
        <Products>
          <Product
            id={1}
            image={example}
            title={"Produto 1"}
            price={13.99}
            description={"I saw beyonces tizzles and my pizzle went crizzle ipsizzle dolor fo shizzle my nizzle amizzle, nizzle bling bling elit. Go to hizzle sapizzle velizzle, pimpin' fo shizzle, dawg ass, i'm in the shizzle shiznit, you son of a bizzle."}
          />
          <Product
            id={1}
            image={example}
            title={"Produto 1"}
            price={13.99}
            description={"I saw beyonces tizzles and my pizzle went crizzle ipsizzle dolor fo shizzle my nizzle amizzle, nizzle bling bling elit. Go to hizzle sapizzle velizzle, pimpin' fo shizzle, dawg ass, i'm in the shizzle shiznit, you son of a bizzle."}
          />
          <Product
            id={1}
            image={example}
            title={"Produto 1"}
            price={13.99}
            description={"I saw beyonces tizzles and my pizzle went crizzle ipsizzle dolor fo shizzle my nizzle amizzle, nizzle bling bling elit. Go to hizzle sapizzle velizzle, pimpin' fo shizzle, dawg ass, i'm in the shizzle shiznit, you son of a bizzle."}
          />
          <Product
            id={1}
            image={example}
            title={"Produto 1"}
            price={13.99}
            description={"I saw beyonces tizzles and my pizzle went crizzle ipsizzle dolor fo shizzle my nizzle amizzle, nizzle bling bling elit. Go to hizzle sapizzle velizzle, pimpin' fo shizzle, dawg ass, i'm in the shizzle shiznit, you son of a bizzle."}
          />
          <Product
            id={1}
            image={example}
            title={"Produto 1"}
            price={13.99}
            description={"I saw beyonces tizzles and my pizzle went crizzle ipsizzle dolor fo shizzle my nizzle amizzle, nizzle bling bling elit. Go to hizzle sapizzle velizzle, pimpin' fo shizzle, dawg ass, i'm in the shizzle shiznit, you son of a bizzle."}
          />
          <Product
            id={1}
            image={example}
            title={"Produto 1"}
            price={13.99}
            description={"I saw beyonces tizzles and my pizzle went crizzle ipsizzle dolor fo shizzle my nizzle amizzle, nizzle bling bling elit. Go to hizzle sapizzle velizzle, pimpin' fo shizzle, dawg ass, i'm in the shizzle shiznit, you son of a bizzle."}
          />
        </Products>
      </Container>
      <Footer />
    </>
  )
}

export default PorductsList;
