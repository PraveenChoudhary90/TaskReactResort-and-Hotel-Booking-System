
import './App.css'

import { Route, Routes, useLocation} from "react-router-dom"
import {Navbar,Footer} from './Navbar';
import About from './About';
import Contact from './Contact';
import Singup from './Singup';
import Login from './Login';
import Room from './Room';
import Home from './Home';
import Reservation from './Room-reservation';
import Crud from './Crud';

function App() {

  let local = useLocation()

  let auth = local.pathname ==='/singup' || local.pathname === '/login'

  return (
    <>
    {!auth && <Navbar/>}
    
      <Routes>
      {/* <Route path='/' element={<Navbar/>}> */}
      <Route index element={<Home/>} ></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path="/room" element={<Room/>}></Route>
      <Route path='/reservation' element={<Reservation/>}></Route>
      <Route path='/contact' element={<Contact/>} ></Route>
      <Route path='/singup' element={<Singup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/crud' element={<Crud/>}></Route>
      <Route path='/footer' element={<Footer/>}></Route>
      
      {/* </Route> */}
      

     </Routes>
    {!auth && <Footer/>}


    </>
  )
}

export default App;
