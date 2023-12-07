import Header from './header/header';
import './Main.css';
import Contacts from './contacts/contacts';
import Portfolio from './portfolio/portfolio';
import Home from './home/home';
import Skills from './skills/skills';
import Footer from './footer/footer';
import Respect from './respect/respect'
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/respect" element={<Respect />} />
      </Routes>
      <Footer />
    </BrowserRouter>
      );
}

      export default Main;