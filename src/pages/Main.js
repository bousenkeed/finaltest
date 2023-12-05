import Header from './header/header';
import './Main.css';
import Contacts from './contacts/contacts';
import Gallery from './gallery/gallery';
import Home from './home/home';
import Portfolio from './portfolio/portfolio';
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
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
      );
}

      export default Main;