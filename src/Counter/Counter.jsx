import "./index.css";
import { useState } from "react";
import { data } from "../Assets/data";

const Counter = () => {
  const [count, setCount] = useState([0]);
  let advice= data[count]
 const increase =()=> setCount(advice.id ++)
 const decrease =()=> setCount(count - 1)
  return (
    <div className={"container"}>
      <div className={"card-container"}>
        <div className={"card"}>
        <h1> CON USESTATE</h1>
          <h2>{advice.advice}</h2>
          <p className={"card__text"}>Post number: #{advice.id}</p>
        </div>
      </div>

      <div className={"card__actions"}>
        <button  onClick={decrease} className={"btn--previous"}>
          Previous
        </button>

        <button onClick={increase} className={"btn--next"}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Counter;
