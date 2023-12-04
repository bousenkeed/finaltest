import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './pages/Main';
import Header from './pages/header/header';
import Footer from './pages/footer/footer';
import Portfolio from './pages/portfolio/portfolio';
import Gallery from './pages/gallery/gallery';
import Contacts from './pages/contacts/contacts';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

