import Header from './header/header';
import './Main.css';
import Contacts from './contacts/contacts';
import Gallery from './gallery/gallery';
import Home from './home/home';
import Skills from './skills/skills';
import Footer from './footer/footer';
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
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer />
    </BrowserRouter>
      );
}

      export default Main;