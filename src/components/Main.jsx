import Calculator from "./Calculator";
import Later from "./Later";
import {useState} from "react";

const Main =()=>{
    const [navigationBar,setNavigationBar] = useState("calc")

    return (
        <div className="universe">
            <div className="content">
                <div className="nav">
                    <div className="calculator_box">
                    <h3 className="button-text" onClick = {()=>setNavigationBar("calc") }>Calculator</h3>
                    </div>
                    <div className="later_box">
                    <h3 className="button-text" onClick = {()=>setNavigationBar("later")}>Later</h3>
                    </div>
                </div>
                { navigationBar === "calc" ? <Calculator/>: <Later/> }
                <div>
                </div>
            </div>
        </div>
    )
} 

export default Main
