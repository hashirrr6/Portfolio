import Header from "./components/headers";
import Homee from "./components/home";
// import Contact from "./components/contact"
// import Footer from "./components/footer"
// import About from "./components/about"
import { BrowserRouter,Routes,Route } from "react-router-dom";

function Home(){
return(
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={Header}/>
            <Route path="/home" Component={Homee}/>
        </Routes>
    
    
    </BrowserRouter>
)
}
export default Home