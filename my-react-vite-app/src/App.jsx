import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import vppcoe1 from './assets/images/vppcoe.png'

function Header(){
  return(
    <ul>
      <img src={vppcoe1} alt="VPPCOE Logo" width="max" height="200"></img>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  )
}

function App() { 
    return (
    <div>     
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App