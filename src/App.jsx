import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/mainlayout";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Error } from "./pages/error";
import { Service } from "./pages/service";
import { Contact } from "./pages/contact";

import { Korzinka } from "./pages/korzinka";
import Login from "./pages/Login/login";


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="korzinka" element={<Korzinka/>} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
