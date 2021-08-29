import React from "react";
import { buyIceCream } from "../redux/index";
import { connect } from "react-redux";
function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of IceCreams-{props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy IceCreaam</button>
    </div>
  );
}
//step-1
//this function gets the redux state as a paramter and returns the object
//selectors returns some state information from the redux store.Instead of writing couple of lines in mapsstatetoprops function it is extracted into seperate file called as selectors.
const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCream //as we use multiple reducers state.iceCream is defined else we can call state.numOfIceCream.
  };
};
//step-2
//this function gets dipatch method as paramter and returns an object

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()) //it allows us to map the actionCreators to prop in our components
  };
};
//step-3 : connecting the mapStateToProps ,mapDispatchToProps with our react component for that we use connect higher order component from react-redux library
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
