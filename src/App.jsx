import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services";
import Career from "./components/Career";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
function App() {

  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]); // Reset loading when the route changes

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/career" element={<Career />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/project" element={<Project />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
