import React ,{useState} from "react";
function Form() {
    const[value,setValue]=useState("")
    const [fullName,setfullName] =useState()
    const clicked =(event) =>
    {
        console.log(event.target.value)
        setValue(event.target.value)
    }
    const submit =() =>
    {
        setfullName(value);
    }
    return (
        <>
            <div >
               <h1 className="h1"> Name: {fullName} </h1><input type="text" className="input" placeholder="Enter Your Name " onChange={clicked}/>
            </div>
            <button className="button2" onClick={submit}>Submit</button>
        </>);
}
export default Form;