import './App.css';
import {Route , Routes} from  'react-router-dom';
import Sell from './Components/Sell/Sell';
import Contact from './Contact';
import Home from './Home';
import Donate from './Donate';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path ="/" element = {<Home/>} />
      <Route exact path ="/sell" element = {<Sell/>} />
      <Route exact path ="/contact" element = {<Contact/>} />
      <Route exact path ="/donate" element = {<Donate/>} />
    </Routes>
     <Footer/> 
    </>
  );
}
export default App;
