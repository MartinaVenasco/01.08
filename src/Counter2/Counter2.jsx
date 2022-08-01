import "./index.css";
import { data } from "../Assets/data";
import { useReducer } from "react";

const Counter2 = () => {
const initialState = {count:0}



const reducer = (state,action) => {

  switch (action.type) { case 'next': return {count: state.count +1}
  case 'previous': return {count: state.count -1}
default: throw new Error ()}
}
const [state, dispatch]= useReducer(reducer, initialState)
let advice= data[state.count]
  return (
    <div className={"container"}>
      {/* card container */}
      <div className={"card-container"}>
        <div className={"card"}>
        <h1> CON REDUCER </h1>
          <h2>{advice.advice}</h2>
          <p className={"card__text"}>Post number: #{advice.id}</p>
        </div>
      </div>
      {/* Card Actions */}
      <div className={"card__actions"}>
        {/* Btn decrease */}
        <button
          disabled={state.count<1}
          className={"btn--previous"}
         onClick={()=>dispatch({type: 'previous'})}
        >
          Previous
        </button>
        {/* Btn increase */}
        <button
          disabled={state.count>=data.length-1}
          className={"btn--next"}
          onClick={()=>dispatch({type: 'next'})}
        >
          Next
        </button>
      </div>
    </div>
 
  );
};

export default Counter2;
