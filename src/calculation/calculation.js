import React, { useState } from "react";
import {addition, subtraction, multiplication,} from"./calculation.css"


function Calculation(){
    let [result , setResult] = useState('');
    function  handleTextone(event) {
        setResult(+{a:event.target.value});
       }

       function handleTexttwo(event) {
        setResult(+{b:event.target.value});
        }
        
    function buttonClickEventHandler(event){
        setResult(event.target.value);
        console.log(result);     
    }
    


    return(
        <div className="card">
        
        <h1>Calculate the Value</h1>
       
       <label>First value</label>
       <input type="text" 
       value={result.a}
       type="number" 
       placeholder="0"
       onChange={handleTextone}></input><br></br>
       <label>Second value</label>
       <input type="text" 
       value={result.b}
       placeholder="0"
       type="number" 
       onChange={handleTexttwo}></input><br></br>
      
       <button onClick={buttonClickEventHandler} value={addition}>
       Add
       </button><br></br><br></br>
       <button onClick={buttonClickEventHandler} value={subtraction}>
       subtraction
       </button><br></br><br></br>
       <button onClick={buttonClickEventHandler} value={multiplication}>
       multiplication
       </button><br></br><br></br>
       <button onClick={() => setResult(0)}>Clear Count</button>
       <h1 type="number" >Result is :{parseInt(result)}</h1>
       
        </div>
    );

}

export default Calculation;