import styled from "@emotion/styled";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../context/SessionContext";
import { loginWithGoogle } from "../services/firebase/auth";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

export default function Login() {
  const ctx = useContext(SessionContext);

  async function handleLogin() {
    const { token, user } = await loginWithGoogle();
    ctx.signIn(token, user);
  }

  return (
    <Container>
      {!ctx.session.token ? (
        <button onClick={handleLogin}>Sign in with Google</button>
      ) : (
        <Navigate to="/" />
      )}
    </Container>
  );
}
