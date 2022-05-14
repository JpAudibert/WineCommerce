import banner from "../../assets/banner.jpg"
import example from "../../assets/example.jpg"
import history from "../../assets/history.jpg"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import NavigationBar from "../../components/NavigationBar"
import Product from "../../components/Product"
import { BackgroundImage, DescriptionItem, Descriptions, Products } from "./styles"

const Home: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <BackgroundImage>
        <img src={banner} alt="banner" />
      </BackgroundImage>
      <Container>
        <h2>Produtos em Destaque</h2>
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
            title={"Produto 2"}
            price={13.99}
            description={"I saw beyonces tizzles and my pizzle went crizzle ipsizzle dolor fo shizzle my nizzle amizzle, nizzle bling bling elit. Go to hizzle sapizzle velizzle, pimpin' fo shizzle, dawg ass, i'm in the shizzle shiznit, you son of a bizzle."}
          />
          <Product
            id={1}
            image={example}
            title={"Produto 3"}
            price={13.99}
            description={"I saw beyonces tizzles and my pizzle went crizzle ipsizzle dolor fo shizzle my nizzle amizzle, nizzle bling bling elit. Go to hizzle sapizzle velizzle, pimpin' fo shizzle, dawg ass, i'm in the shizzle shiznit, you son of a bizzle."}
          />
          <Product
            id={1}
            image={example}
            title={"Produto 4"}
            price={13.99}
            description={"I saw beyonces tizzles and my pizzle went crizzle ipsizzle dolor fo shizzle my nizzle amizzle, nizzle bling bling elit. Go to hizzle sapizzle velizzle, pimpin' fo shizzle, dawg ass, i'm in the shizzle shiznit, you son of a bizzle."}
          />
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
      <Footer />
    </>
  );
}

export default Home;
