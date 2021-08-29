import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux"; //actionCreator

function HookCakeContainer() {
  //it is the replacement of mapStateToProps.It accepts a function as parameter.This function is called as selector function.selector function receives the redux state as its argument which is similar to mapStateToProps function.the selector function returns a value that is state.numOfCakes.
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch(); //it allows to use dispatch action of redux
  return (
    <div>
      <h2>HookContainer</h2>
      <h2>Number of cakes-{numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HookCakeContainer;
