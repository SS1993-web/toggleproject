import {useState} from "react";

import {Validate} from "./validation";
import "./calculationApp.css"

function Calculation (){

    let [option, setOption] = useState(0);
    let [number, setNumber] = useState(0);
   
    function onUnitChange(e){
        setUnit(e.target.value);
    }

    return (
            <div className="CalculationContanier"> 
            <form  noValidate>
            <label className="label">FirstNumber:- &ensp;</label>
            <input className="input" 
             placeholder="0"
             type="number" 
            required = {() =>setNumber(number)} /><br/><br/>
            <label className="label">SecondNumber:- &ensp;</label>
            <input className="input"  
            placeholder="0"
            type="number" 
           required ={() =>setNumber(number)}/><br/><br/>
           <label className="label">option:- &ensp;</label>
           <input className="input"  
           placeholder="0"
           type="number" 
           name="value"
          required = {() => setOption(option)}/><br/><br/>
           
                <button className="button">Reset</button><br/><br/>
                <button className="button">Submit</button><br/><br/>
                <div>
                <label className="result">Result:- &ensp; 000</label>
              
                </div>
              </form>
                </div>
              
              
          
          

    );
}

export default Calculation;