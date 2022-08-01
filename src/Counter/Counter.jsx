import "./index.css";
import { useState } from "react";
import { data } from "../Assets/data";

const Counter = () => {
  const [count, setCount] = useState(0);
  let advice= data[count]
 const increase =()=> setCount(count +1)
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
        <button disabled={count === 0 ? true : false} onClick={decrease} className={"btn--previous"}>
          Previous
        </button>

        <button  disabled={count >= data.length - 1} onClick={increase} className={"btn--next"}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Counter;
