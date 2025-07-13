import {Home} from "./pages/home"
import {AboutUs} from "./pages/about"
import {Header} from "./components/header"
import {FAQ} from "./components/faq"
import {Services} from "./pages/services"
import {ContactUs} from "./pages/contact"
import {Footer} from "./components/footer"
import { Routes,Route} from "react-router-dom"


export const App=()=> {
    
  return (
    <>
    <Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/contact" element={<ContactUs/>}/>
  <Route path="/about" element={ <AboutUs/>}/>
  <Route path="/services" element={ <Services/>}/>
  {/* <Route path="/faq" element={ <FAQ/>}/>
  */}

 
</Routes>
<FAQ/>
<Footer/>
   
   

    </>
      
     
   
  );
}


