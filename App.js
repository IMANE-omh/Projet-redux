import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./actions";

const App = () => {
  const [x, setX] = useState(1); //x sera associe a <input>
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const augmenter = () => {
    dispatch(increment(x));
    //appel de increment = (n) => ({ type: 'INCREMENT',payload: { n }, });   };

    const diminuer = () => {
      dispatch(decrement(inputValue));
    };

    return (
      <div>
        <h1>Compteur: {count}</h1>
        <input
          type="number"
          value={x}
          onChange={(e) => setX(Number(e.target.value))}
        />
        <button onClick={augmenter}>Incrémenter</button>
        <button onClick={diminuer}>Décrémenter</button>
      </div>
    );
  };
};

export default App;
