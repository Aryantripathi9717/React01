import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About';
import Navbar from './components/Navbar.jsx'; 
import Details from './components/Details.jsx';


const App = () => {
  return (
    <BrowserRouter> 
    <Navbar/>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Details/:id' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;