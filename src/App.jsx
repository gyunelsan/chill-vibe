import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Navbar from "./Components/Navbar";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/pages" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
