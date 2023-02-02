import React ,{useState} from "react";

const Hooks = () =>
{
    const[name,setName] =useState('click Me');    
    const bgChange =() =>
    {
        setName("Hello");
    }
    const double =() =>
    {
        setName("Click Me");
    }
    return(
        <div>
        <button className="button" onClick={bgChange} onDoubleClick={double}>{name}</button>
    </div>

    );
}

export default Hooks;