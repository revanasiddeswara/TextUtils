
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import React , {useState} from 'react'
import Footer from './components/Footer';


function App() {
  const [mode , setMode]=useState('light');
  // const [mode1 , setMode1]=useState('light');

  const [alert, setAlert]=useState(null);
  const showAlert=(message, type)=>{
   setAlert({
    msg:message,
    type:type
   } )
   setTimeout(() => {
    setAlert(null);
   }, 1500);

  }

  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      showAlert("Light mode has been Enabled", "success")
      document.title="TextUtils-light"
      setInterval(() => {
        document.title="This is amazing"
      },2000);
      setInterval(() => {
        document.title="Enter You text"
      },1500);
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor="rgb(10 3 39)"
      document.body.style.color="white"
      showAlert("Dark mode has been Enabled", "success")
      setInterval(() => {
        document.title="This is amazing"
      },2000);
      setInterval(() => {
        document.title="Enter You text"
      },1500);
      setInterval(() => {
        document.title="TextUtils-Light"
        
      },1500);
    }
  }
  const green=()=>{
   
      setMode('dark')
      document.body.style.backgroundColor="#064306"
      document.body.style.color="white"
      showAlert("Background colored changed to Green", "success")
    }
  
  const yellow=()=>{
   
      setMode('dark')
      document.body.style.backgroundColor="rgb(127 102 1)"
      document.body.style.color="white"
      showAlert("Background colored changed to Yellow", "success")
    }
  
  const red=()=>{
   
      setMode('dark')
      document.body.style.backgroundColor="rgb(145 2 2)"
      document.body.style.color="white"
      showAlert("Background colored changed to Red", "success")
    }
  
  const black=()=>{
   
      setMode('dark')
      document.body.style.backgroundColor="black"
      document.body.style.color="white"
      showAlert("DBackground colored changed to Black", "success")
    }
  
  return (
    <>
    <Router>
          <Navbar  title="TextUtils"mode={mode} toggleMode={toggleMode} green={green} yellow={yellow} red={red} black={black}/>
          <Alert alert={alert}/>
          <div className='container my-3'>
          <Routes>
                  <Route exact path="/about" element={  <About mode={mode}  />} /> 
                  <Route exact path="/" element={<Textform heading="Enter text below"  showAlert={showAlert} mode={mode} />} />
              </Routes>
  
          
        </div>
        <Footer/>
   </Router>
    </>
  );
}

export default App;
