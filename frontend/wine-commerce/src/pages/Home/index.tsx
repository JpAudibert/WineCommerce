import { Link } from "react-router-dom"
import { NavigationBar, BackgroundImage, Products, Product, Container, Descriptions, DescriptionItem } from "./styles"
import banner from "../../assets/banner.jpg"
import example from "../../assets/example.jpg"
import history from "../../assets/history.jpg"

const Home: React.FC = () => {
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
      <Container>
        <h2>Produtos em Destaque</h2>
        <Products>
          <Product>
            <Link to="">
              <img src={example} alt="Example" />
              <h3>Produto 1</h3>
              <p>Lorem ipsum dolor we gonna chung amizzle, its fo rizzle adipiscing elit. Nullam sapien velizzle, fo shizzle mah nizzle fo rizzle, mah home g-dizzle things, suscipit things, gravida vizzle, shizznit. Pellentesque phat shiznit. Nizzle erizzle.</p>
            </Link>
          </Product>
          <Product>
            <Link to="">
              <img src={example} alt="Example" />
              <h3>Produto 1</h3>
              <p>Lorem ipsum dolor we gonna chung amizzle, its fo rizzle adipiscing elit. Nullam sapien velizzle, fo shizzle mah nizzle fo rizzle, mah home g-dizzle things, suscipit things, gravida vizzle, shizznit. Pellentesque phat shiznit. Nizzle erizzle.</p>
            </Link>
          </Product>
          <Product>
            <Link to="">
              <img src={example} alt="Example" />
              <h3>Produto 1</h3>
              <p>Lorem ipsum dolor we gonna chung amizzle, its fo rizzle adipiscing elit. Nullam sapien velizzle, fo shizzle mah nizzle fo rizzle, mah home g-dizzle things, suscipit things, gravida vizzle, shizznit. Pellentesque phat shiznit. Nizzle erizzle.</p>
            </Link>
          </Product>
          <Product>
            <Link to="">
              <img src={example} alt="Example" />
              <h3>Produto 1</h3>
              <p>Lorem ipsum dolor we gonna chung amizzle, its fo rizzle adipiscing elit. Nullam sapien velizzle, fo shizzle mah nizzle fo rizzle, mah home g-dizzle things, suscipit things, gravida vizzle, shizznit. Pellentesque phat shiznit. Nizzle erizzle.</p>
            </Link>
          </Product>
        </Products>
        <Descriptions>
          <DescriptionItem isImageLeft={true}>
            <img src={history} alt="Nossa História" />
            <div>
              <h2>Nossa história</h2>
              <p>Lorizzle mofo dolizzle fo amizzle, consectetuer daahng dawg gangsta. Nullam sapizzle velizzle, check it out volutpizzle, suscipit yo mamma, daahng dawg dizzle, arcu. Pellentesque uhuh ... yih! tortor. Sed erizzle. Nizzle izzle dolizzle break yo neck, yall dope tempizzle boom shackalack. Maurizzle sheezy nibh izzle turpizzle. Rizzle izzle tortor. Pellentesque dizzle rhoncizzle nisi. In sizzle dawg nizzle dictumst. Crackalackin shizzlin dizzle. Curabitizzle tellus urna, pretium eu, mattizzle bling bling, eleifend vitae, nunc. Fizzle shiznit. Integer gangster ma nizzle sizzle go to hizzle.</p>
              <p>Curabitizzle shiznit diam crunk my shizz aliquam mollizzle. Fizzle potenti. Morbi odio. Pizzle neque. Cras sizzle. We gonna chung mauris maurizzle, interdizzle the bizzle, feugizzle sit amet, rizzle izzle, gizzle. Pellentesque fizzle. Vestibulum orci mi, volutpat dawg, sagittizzle rizzle, that's the shizzle semper, check it out. Cras in mofo. Aliquizzle volutpizzle felis vizzle sure. Cras quis justo uhuh ... yih! purizzle sodales ornare. Sed venenatizzle daahng dawg izzle lacus. Nunc bow wow wow. Suspendisse uhuh ... yih! placerizzle dang. Curabitur eu ante. Shizzle my nizzle crocodizzle pharetra, break yo neck, yall shiz fizzle hendrerizzle, fo shizzle felizzle elementum mah nizzle, in break it down go to hizzle felizzle luctus pede. Nam a fizzle. Class aptent away its fo rizzle izzle the bizzle torquent per conubia dope, per uhuh ... yih! hymenizzle. Aliquam fo shizzle, neque nizzle brizzle nonummy, nisl you son of a bizzle viverra leo, in sempizzle gangster crunk a sizzle.</p>
            </div>
          </DescriptionItem>
          <DescriptionItem isImageLeft={false}>
            <img src={history} alt="Nossa Filosofia" />
            <div>
              <h2>Nossa Filosofia</h2>
              <p>Lorizzle mofo dolizzle fo amizzle, consectetuer daahng dawg gangsta. Nullam sapizzle velizzle, check it out volutpizzle, suscipit yo mamma, daahng dawg dizzle, arcu. Pellentesque uhuh ... yih! tortor. Sed erizzle. Nizzle izzle dolizzle break yo neck, yall dope tempizzle boom shackalack. Maurizzle sheezy nibh izzle turpizzle. Rizzle izzle tortor. Pellentesque dizzle rhoncizzle nisi. In sizzle dawg nizzle dictumst. Crackalackin shizzlin dizzle. Curabitizzle tellus urna, pretium eu, mattizzle bling bling, eleifend vitae, nunc. Fizzle shiznit. Integer gangster ma nizzle sizzle go to hizzle.</p>
            </div>
          </DescriptionItem>
        </Descriptions>
      </Container>
      {/* <Footer>

      </Footer> */}
    </>
  );
}

export default Home;
