import Button from "@/components/Button";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import { LoginContainer, FormItems } from "@/styles/login";

export default function Login() {
  return (
    <>
      <NavigationBar />
      <Container>
        <h2>Login</h2>
        <LoginContainer>
          <FormItems method="post">
            <div>
              <span>E-mail</span>
              <input type="text" />
            </div>
            <div>
              <span>Senha</span>
              <input type="password" />
            </div>
            <Button>Entrar</Button>
          </FormItems>
        </LoginContainer>
      </Container>
      <Footer />
    </>
  )
}
