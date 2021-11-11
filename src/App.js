import { css, Global } from "@emotion/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import { SessionProvider } from "./context/SessionContext";
import Books from "./pages/Books";
import Login from "./pages/Login";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Noto+Serif&family=Zen+Kurenaido&display=swap");
          * {
            font-family: "Noto Serif", serif;
          }
          body {
            background-color: #a8c0ce;
          }
          h1,
          h2,
          h3 {
            font-family: "Zen Kurenaido", sans-serif;
            color: #333;
          }
          button {
            background-color: #eeec00;
            color: #768591;
            border: none;
            padding: 0.5em 2em;
            margin: 1em 0;
          }
        `}
      />
      <SessionProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Books />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/new-book"
              element={
                <ProtectedRoute>
                  <NewBook />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </SessionProvider>
    </>
  );
}

export default App;
