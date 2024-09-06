
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Ecommerce/Home";
import Navy from "./Ecommerce/Navy";
import Show from "./Ecommerce/Show";





const App = ()=>{

  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navy/>}>
      <Route path="Show" element={<Show/>}/>
      <Route path="Home" element={<Home/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
   
    
    
   
    </>
  );
}
export default App;
