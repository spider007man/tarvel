import "./styles.css";

import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./route/Home";
import About from "./route/About";
import Contact from "./route/Contact";
import Service from "./route/Service";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
