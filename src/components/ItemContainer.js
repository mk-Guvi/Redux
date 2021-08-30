import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux/index";

function ItemContainer(props) {
  return (
    <div>
      <h2>ItemContainer</h2>
      <h3>Item -{props.item}</h3>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;

  return {
    item: itemState
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction //it allows us to map the actionCreators to prop in our components
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

//if you want only dispatch action but not subscribe to the state changes in the store then null is passed
// export default connect(null,mapDispatchToProps)(ItemContainer);
