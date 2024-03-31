
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert =(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
           setAlert(null)
    },3000)

  }

  let toggleMode=()=>{
    if (mode==="light") {
      setMode("dark")
      document.body.style.backgroundColor="black"
      showAlert("Dark mode has been enabled ","success")
      
    } else {
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("light mode has been enabled ","success")
      
    }
  }
  return (
    <>
   

     <Navbar title="TextUtils" aboutText="AboutText" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert }/>
     <About/>
     <div className='container my-3'>
    
          <TextForm showAlert={showAlert} heading="Enter the Text to analayes"/>
            
         
    

     </div>
    

    </>
  )
}

export default App
