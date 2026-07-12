import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nav" element={<Navbar name="My Navbar" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
