import { Link } from "react-router-dom"
import { NavigationBar, BackgroundImage, Products, Product, List } from "./styles"
import banner from "../../assets/banner.jpg"
import example from "../../assets/example.jpg"

const ProductList: React.FC = () => {
  return (
    <>
      <NavigationBar>
        <div>
          <Link to="/">Wine Commerce</Link>
        </div>
        <div>
          <Link to="/products">Produtos</Link>
          <Link to="/login">Login</Link>
        </div>
      </NavigationBar>
      <BackgroundImage>
        <img src={banner} alt="banner" />
      </BackgroundImage>
      <List>
        <h2>Produtos em Destaque</h2>
        <Products>
          <Product>
            <img src={example} alt="Example" />
            <h3>Produto 1</h3>
            <p>Lorem ipsum dolor we gonna chung amizzle, its fo rizzle adipiscing elit. Nullam sapien velizzle, fo shizzle mah nizzle fo rizzle, mah home g-dizzle things, suscipit things, gravida vizzle, shizznit. Pellentesque phat shiznit. Nizzle erizzle.</p>
          </Product>
        </Products>
      </ List>
    </>
  );
}

export default ProductList;
