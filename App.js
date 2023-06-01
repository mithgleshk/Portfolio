
import  Work  from "./Work";
import Header from "./components/Header";
import Home from "./Home";
import  Timeline from "./Timline";
import  Services from "./Services";
import  Testimonial  from "./Testimonial";
import  Contact  from "./Contact";
import  Footer  from "./Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";






function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);

  return  (
    <>
      
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home  />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  ) ;
  
}

export default App;