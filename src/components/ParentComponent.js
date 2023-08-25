import React, {useState} from "react";

function ParentComponent{
    const[inputValue, setInputValue]=useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return(
        <div>
        <ChildComponent inputValue={inputValue} handleInputChange={handleInputChange} />
        </div>
    )
}

function ChildComponent({ inputValue, handleInputChange}){
    return(
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
        </div>
    )
}

export default ParentComponent;