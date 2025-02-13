import React from "react";

import "./index.css"
import Navbar from "./components/headers";
import Homee from "./components/home";
import Footer from "./components/footer";
import Introduction from "./components/intoduction";
import About from "./components/about";
import Projects from "./components/projects";

function App(){
return(<>

 <Navbar/>
  <Homee/>
  <Introduction/>
  <Projects/>
  <About/>
  <Footer/>
  </>
)
}
export default App