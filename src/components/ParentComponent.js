import React, {useState} from "react";

function ParentComponent() {

    const[inputValue, setInputValue]=useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
    
    return(
        <div>
            <div className="parent">
                <h1>Parent Component</h1>
            {inputValue}
                  <div className="child">
                    <h2>Child Component</h2>
                  <input type="text" value={inputValue} onChange={handleInputChange}/> 
                  </div>
            </div>
        </div>
    )
}

export default ParentComponent;
