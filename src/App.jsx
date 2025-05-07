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
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // In Vite, environment variables are available through import.meta.env
    const authKey = import.meta.env.VITE_AUTH_KEY;
    
    if (authKey === 'my-super-secret') {
      setAuthorized(true);
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!authorized && !loading) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center'
      }}>
        Access Denied<br />
        Environment not authorized.
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <div className="loader">
          <div className="cir1"></div>
          <div className="cir2"></div>
          <div className="cir3"></div>
          <div className="cir4"></div>
          <div className="cir5"></div>
        </div>
      ) : (
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