
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';


import Signin from './components/Signin';
import Register from './components/Register';
import Home from './components/Home';
import Logout from './components/Logout';
import Sum from './components/Sum';

function App() {
  return (
    <>
   
  
     <BrowserRouter>
     <Navbar/>
     <Routes>

       
         {/* <Route exact path="/" element={<Home />} /> */}
        
         <Route exact path="createSum" element={<Sum />} />
         <Route exact path="signin" element={<Signin />} />
         <Route exact path="register" element={<Register />} />
         <Route exact path="logout" element={<Logout />} />
         {/* <Route path="*" element={<NoPage />} /> */}
       
     </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
