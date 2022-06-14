import Button from "@/components/Button";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import { LoginContainer, FormItems } from "@/styles/login";
import axios from "axios";
import { useCallback } from "react";

export default function Login() {
  const handleLogin = useCallback(async () => {
    const user = await axios.post('http://localhost:5144/login');

    return {
      props: { user },
    }
  }, [])

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
            <Button onClick={handleLogin}>Entrar</Button>
          </FormItems>
        </LoginContainer>
      </Container>
      <Footer />
    </>
  )
}
