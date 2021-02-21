import {useState} from "react";
import {ButtonFunction} from "./buttonFunction"
import {Validate} from "./validation";
import "./calculationApp.css"

function Calculation (){

    let [option, setOption] = useState(0);
    let [number, setNumber] = useState(0);

    let [a, setfNumber] = useState(0);
    let [b, setsNumber] = useState(0);

    let [results, setResults] = useState(0);

   
    function onOptinChange(e){
        setOption(e.target.value);
        console.log("option choose${optionnpm start}")
    }

    function onFNumber(e){
        setfNumber(e.target.value);
        console.log("first number${a}");
    }
    function onSNumber(e){
        setsNumber(e.target.value);
        console.log("second number${b}");
    }
    function getResult(e){
        e.preventDefault();
        console.log("form is submitted");
    }

    return (
            <div className="CalculationContanier"> 
            <form  onSubmit={getResult}>
            <label className="label">FirstNumber:- &ensp;</label>
            <input className="input" 
             placeholder="0"
             type="number" 
             checked = {a === number}
            required = {() =>setNumber(number),
            onchange= {onFNumber}}/><br/><br/>
            <label className="label">SecondNumber:- &ensp;</label>
            <input className="input"  
            placeholder="0"
            type="number" 
            checked = {b === number}
           required ={() =>setNumber(number),
            onchange= {onSNumber}}/><br/><br/>
           <label className="label">option:- &ensp;</label>
           <input className="input"  
           placeholder="0"
           type="number" 
           name="value"
           checked = {option === 1 | 2 | 3 | 4}
          required = {() => setOption(option),
          onchange= {onOptinChange}}/><br/><br/>
           
                <button className="button" onClick={() => setfNumber(0)}>Reset</button><br/><br/>
                <input type = "submit" value = "Submit"/>
                <div>
                <label className="result">Result:- &ensp; {results}</label>
              
                </div>
              </form>
                </div>
              
              
          
          

    );
}

export default Calculation;