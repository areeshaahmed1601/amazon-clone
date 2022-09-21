import Header from './Header';
import Home from './Home';
import Payment from './Payment';
import Checkout from './Checkout';
import Orders from './Orders';
import Login from './Login';
import {Routes,Route} from 'react-router-dom'
import { useEffect } from 'react';
import './App.css';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise=loadStripe("pk_test_51LjR8pLyxnokOg5ODVJT5AxJze1hNSrsLgooI7x32RVPVnuQT5kJKXAd0uYUajFtL9uJjpUNm03jZWAimqbpfftx00nYoJQscx");

function App() {
  const [{user},dispatch]=useStateValue();

  useEffect(()=>{
    
    auth.onAuthStateChanged(authUser=>{
      console.log('The User Is',authUser)

      if(authUser){
         
        dispatch({
          type:'SET_USER',
          user:authUser
        })

      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })

      }
  })
  },[])

  return (
   <>  
    
      <Header/>  
     <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/orders" element={<Orders/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/payment" element={
       <Elements stripe={promise}>
        <Payment/>
        </Elements>} 
        />
       <Route path="/checkout" element={<Checkout/>}/> 
  
     </Routes>
     </>

   
  );
}

export default App;
