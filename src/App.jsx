import React from "react";
// import Home from "./port"
import "./index.css"
import Homee from "./components/home";
import Footer from "./components/footer";
import Introduction from "./components/intoduction";
import About from "./components/about";
import Projects from "./components/projects";

function App(){
return(<>
  {/* <Home/> */}
  <Homee/>
  <Introduction/>
  <Projects/>
  <About/>
  <Footer/>
  </>
)
}
export default App