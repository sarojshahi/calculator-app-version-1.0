import "./Main.css"
import { useState } from "react";

const Calculator = ()=>{
const [ displayValue, setDisplayValue ]= useState("0");

const calculatorKeys = [
    ["7","8","9","*"],
    ["4","5","6","-"],
    ["1","2","3","+"],
    ["CE","0","/","="]
    ];
const calculation =(expression)=>{
    const result = eval(expression);
    // console.log("This is the expression needed to be calculated", result);
    return result;
}

const handleCalculation = (value)=>{
    console.log("This value is needed", value);
    switch (value) {
        case "CE":
            setDisplayValue("")
            break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "+":
        case "-":
        case "*":
        case "/":
            setDisplayValue((previousValue)=>previousValue+value);
            break;
        case"=":
            setDisplayValue(calculation(displayValue));
            break;
        default:
            setDisplayValue("SYNTAX ERROR");
    }
}

const findClassValue =(value)=>{
    if(value === "="){
        return "equalsto";
    }
    else if(value === "+" || value === "-" || value === "*" || value === "/"){
        return "operators";
    }
    else if(value === "CE"){
        return "clear"
    }
}

return (
    <div className="content">
        <div className= "calculator_container">
        <div className="forehead_calculator">
            <div className="logo">
            <h1>Casio</h1>
            </div>
            <div className="solar">
                
            </div>
        </div>
            <div className="output_screen">{displayValue}</div>
            {calculatorKeys.map((row,index)=>{  
                      return(
                                <div className="row" key={index}>
                                {row.map( (value,index) =>(
                                    <div className={`single_value ${findClassValue(value)}`}
                                    key={index} onClick={()=>{handleCalculation(value)}}>{value}</div>)) 
                                }
                                </div>
                            );
                        })
            }
        </div>
    </div>
)
}
export default Calculator