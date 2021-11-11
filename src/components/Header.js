import styled from "@emotion/styled";
import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";
import { logout } from "../services/firebase/auth";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0;
`;

export default function Header({ children }) {
  const ctx = useContext(SessionContext);

  function handleLogout() {
    logout().then(() => ctx.logout());
  }

  return (
    <StyledHeader>
      {children}
      <button onClick={handleLogout}>Logout</button>
    </StyledHeader>
  );
}
