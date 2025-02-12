import React, { useContext, useReducer } from "react";

import { MyCreateContext } from "./LastTry";
const reduce = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { count: state.count + 1 };
      case "Decrement":
        return { count: state.count - 1 };
      default:
        return state ;
    }
  };
const ConetextCheck = () => {
  const { name, setName } = useContext(MyCreateContext);
  setName('as')

  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reduce, initialState);

  return (
    <div>
      <div>{name} hari</div>
{state.count}
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
    </div>
  );
};

export default ConetextCheck;
