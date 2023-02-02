import React from "react";
const SlotM =(props)=>
{
    let{x,y,z} = props
    if((props.x===props.y) && (props.y===props.z))
    {
        return(
            <>
                <div className="slot-machine">
                    <h1>{x}  {y}  {z}</h1>
                    <h2>This is Matching</h2>
                    <hr/>
                </div>
            </>
        );
    }
    else
    {
        return(
            <>
            <div className="slot-machine">
                <h1>{x}  {y}  {z}</h1>
                <h2>This is Not Matching</h2>
                <hr/>
            </div>
            </>
        );
    }
}
const Game = () =>
{
    return(
        <>
        <h1 className="App"> 🎰 Welcome to the <span style={{fontWeight:"bolder"}}>Game</span> 🎰</h1>
        <div className="slot">
            <SlotM x= "😄"  y= "😄"  z= "😄"/>           
            <SlotM x= "😆"  y= "🍇"  z= "🫐"/>    
            <SlotM x= "🍎"  y= "🍎"  z= "🍎"/>
        </div>
        </>);
}
export default Game;