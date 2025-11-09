import { Outlet } from "react-router";
import "./App.css";
import Nav from "./components/Nav";
import Jiji from "./components/jiji/Jiji";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      {/* <Jiji /> */}
    </>
  );
}

export default App;
