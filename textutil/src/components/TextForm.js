import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Upercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted upper case","success")
    }
    const handleLowerClick=()=>{
        console.log("LowerCase was clicked" + text)
        let newText1 = text.toLowerCase()
        setText(newText1)
        props.showAlert("Converted lower case","success")
    }
    const handleClear=()=>{
        let clear= "";
        setText(clear)
        props.showAlert("Clear Text","success")
    }
    const copyText=()=>{
        let words=document.getElementById("myBox")
        words.select();
        navigator.clipboard.writeText(words.value)
        props.showAlert("Copy Text","success")
    }
    const removeSpace=()=>{
        let space=text.split(/[ ]+/)
        setText(space.join(" "))
        props.showAlert("Remove Extra space","success")
    }
    const speak=()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Audiable Text","success")
        // let speaker = new SpeechSynthesisUtterance("")
        // setText(speaker)
    }
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    const[text, setText] = useState("");
  return (
  <>
    <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
        <h1 style={{color:props.mode==="dark"?"white":"black"}}>{props.heading} </h1>
        <div className="mb-3">
           <textarea className="form-control" style={{backgroundColor:props.mode==="dark"?"grey":"white"}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
           </div> 
         <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert TO Upercase</button> 
         <button className='btn btn-primary mx-2' onClick={handleLowerClick}>Convert TO LowerCase</button>        
         <button className='btn btn-primary mx-2' onClick={handleClear}>Clear</button>        
         <button className='btn btn-primary mx-2' onClick={copyText }>Copy Text</button>        
         <button className='btn btn-primary mx-2' onClick={removeSpace }>Remove Extra sapce</button>        
         <button className='btn btn-primary mx-2' onClick={speak}> Read Above Text</button>        
    </div>
    <div className='container my-3'>
        <h1>Your text Summary </h1>
        <p>{text.split(" ").length} words and {text.length}charachters</p>
        <p>{0.008*text.split(" ").length} Minutes read </p>
        <h2>preview</h2>
       <p>{text.length>0?text:"Enter something in preview"}</p>

    </div>
    </>
  )
}
