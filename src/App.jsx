import React, { useState, useEffect } from "react";

import "./index.css";
import Navbar from "./components/headers";
import Homee from "./components/home";
import Footer from "./components/footer";
import Introduction from "./components/intoduction";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Show loader while loading is true */}
      {loading ? (
        <div className="loader">
          <div className="cir1"></div>
          <div className="cir2"></div>
          <div className="cir3"></div>
          <div className="cir4"></div>
          <div className="cir5"></div>
        </div>
      ) : (
        // Show actual content after loader disappears
        <>
          <Navbar />
          <Homee />
          <Introduction />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
