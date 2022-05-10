import './App.css';
import React, {Component} from 'react';
import {Route , Routes} from  'react-router-dom';
import Sell from './Components/Sell/Sell';
import Cart from './Components/Carts Page/Cart'
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Components/Login/Login';
import { auth } from './Firebase/Utilities';
import Contact from './Components/Contact us/Contact';



const initialState = {
  currentUser: null
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...initialState
    };
  }

  authListener = null

  componentDidMount(){  // life cycle hook
    this.authListener = auth.onAuthStateChanged(userAuth => {
      if(!userAuth) return;

      this.setState({
        currentUser:userAuth
      });
    })
  }
  componentWillUnmount(){   // life cycle hook 
    this.authListener();
  }

   render(){
    return (
      <>
      <Navbar/>
      <Routes>
        <Route exact path ="/" element = {<Home/>} />
        <Route exact path ="/sell" element = {<Sell/>} />
        <Route exact path ="/login" element = {<Login/>} />
        <Route exact path ="/contact" element = {<Contact/>} />
        <Route exact path = "/Cart" element = {
          <>
          <div className='year-name'>
                FE
            </div>
           <Cart/>
           <div className='year-name'>
                SE
            </div>
           <Cart/>
           <div className='year-name'>
                TE
            </div>
           <Cart/>
           <div className='year-name'>
                BE
            </div>
           <Cart/>
        </>
        }/>
      </Routes>
       {/* <Footer/>  */}
      </>
    );
   }
  
}
export default App;
