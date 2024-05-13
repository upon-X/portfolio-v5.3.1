import { Route, Routes, useLocation } from "react-router-dom";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import HolaMundo from "./pages/HolaMundo";
import HelloWorld from "./pages/HelloWorld";
import SecretGame from "./pages/SecretGame";
import { BtnsContainer } from "./components/btnsContainer";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/helloworld" && pathname !== "/holamundo" ? (
        <BtnsContainer />
      ) : null}
      {pathname !== "/" &&
      pathname !== "/helloworld" &&
      pathname !== "/secret-game" &&
      pathname !== "/holamundo" ? (
        <Navbar />
      ) : null}
      <Routes>
        <Route path={"*"} element={<NotFound />} />
        <Route path={"/"} element={<Landing />} />
        <Route path={"/about-me"} element={<AboutMe />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/holamundo"} element={<HolaMundo />} />
        <Route path={"/helloworld"} element={<HelloWorld />} />
        <Route path={"/secret-game"} element={<SecretGame />} />
      </Routes>
      {pathname !== "/" &&
      pathname !== "/helloworld" &&
      pathname !== "/secret-game" &&
      pathname !== "/holamundo" ? (
        <Footer />
      ) : null}
    </>
  );
}

export default App;
