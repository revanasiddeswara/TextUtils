
import React , {useState} from 'react'


export default function Textform(props) {
    const clickupcase = () =>{
        let a= text.toUpperCase();
        setText(a)
        props.showAlert("Converted to Upper case", "success")
    }
    const clicklocase = () =>{
        let a= text.toLocaleLowerCase();
        setText(a)
        props.showAlert("Converted to Lower case", "success")

    }
    const clickclear = () =>{
        let a='';
        setText(a)
        props.showAlert("Text cleared", "success")

    }
    // const clickundo = () =>{
    //    let a=text.length-1();
    //    setText(a)
         
    // }
    const clickcopy = () =>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success")


    }
    const onchange = (event) =>{
        
        setText(event.target.value);
    }
    const clicktoremoveextraspace = () =>{
        let a= text.split(/[  ] +/)

        setText(a.join(" "))
        props.showAlert("Removed Extra spaces", "success")

    }

    const onAlternatingCase = () => {
        let newtext = ""
        for (let index = 0; index < text.length; index++) {
            if ((index % 2) ===0) {
                newtext += text[index].toLowerCase()
            }
            else {
                newtext += text[index].toUpperCase()
            }

        }
        setText(newtext)
        props.showAlert("Converted to Alternative case", "success")

    }
    const handleTitleClick=()=>{

        let newText = text.replace(/\w\S*/g, 
        function(t){ 
            return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
         } );
        setText(newText);
        props.showAlert("Converted to Title", "success")

    }
   
   
    const [text, setText] = useState('Enter the text');
  return (
    <>
        <div className= ' container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={onchange} style={{backgroundColor: props.mode==='dark'?'dark':'light'}} id="myBox" rows="8"></textarea>
            </div>
            {/* <div className= 'container' style={{marginLeft:'10px'}}>  */}
            <button className='btn btn-primary mx-1 my-2' onClick={clickupcase} style={{backgroundColor: '#010a16',borderColor:' white', borderRadius:' 12px' ,boxShadow:' 2px 5px rgb(136 136 136)'}}>convert to Upper Case</button>
            <button className='btn btn-primary mx-1 my-2' onClick={clicklocase}style={{backgroundColor: '#010a16',borderColor:'white' , borderRadius:' 12px' ,boxShadow:' 2px 5px rgb(136 136 136)'}}>convert to Lower Case</button>
            <button className='btn btn-primary mx-1 my-2' onClick={clickclear}style={{backgroundColor: '#010a16',borderColor:'white' , borderRadius:' 12px' ,boxShadow:' 2px 5px rgb(136 136 136)'}}>click clear</button>
            <button className='btn btn-primary mx-1 my-2' onClick={clickcopy}style={{backgroundColor: '#010a16',borderColor:'white' , borderRadius:' 12px' ,boxShadow:' 2px 5px rgb(136 136 136)'}}>click copy</button>
             <button className='btn btn-primary mx-1 my-2' onClick={clicktoremoveextraspace}style={{backgroundColor: '#010a16',borderColor:'white' , borderRadius:' 12px' ,boxShadow:' 2px 5px rgb(136 136 136)'}}>click to remove extraspaces</button>
            <button className='btn btn-primary mx-1 my-2' onClick={onAlternatingCase}style={{backgroundColor: '#010a16',borderColor:'white' , borderRadius:' 12px' ,boxShadow:' 2px 5px rgb(136 136 136)'}}>convert alternating case</button> 
            <button className='btn btn-primary mx-1 my-2' onClick={handleTitleClick} style={{backgroundColor: '#010a16',borderColor:'white' , borderRadius:' 12px' ,boxShadow:' 2px 5px rgb(136 136 136)'}}>convert to title</button> 
            {/* </div> */}



        </div>
        <div className='my-3'>
            <h1>YOUR WORD AND CHARACTER COUNT HERE</h1>
            <p>The number of words in above sentence is : { text.length>0?text.split(" ").length:"0"} and the number of characters are :  {text.length}  </p>
            <p>{0.008 * text.split(" ").length } Minutes to read above sentence</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text in text area to Preview"}</p>
        </div>
    </>
  )
}
