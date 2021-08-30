import React from "react";
import { buyCake } from "../redux/index";
import { connect } from "react-redux";
function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes-{props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}
//step-1
//this function gets the redux state as a paramter and returns the object.It nas second paramter that refers to the props that has already been passed to the component
//selectors returns some state information from the redux store.Instead of writing couple of lines in mapsstatetoprops function it is extracted into seperate file called as selectors.
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
};
//step-2
//this function gets dipatch method as paramter and returns an object

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()) //it allows us to map the actionCreators to prop in our components
  };
};
//step-3 : connecting the mapStateToProps ,mapDispatchToProps with our react component for that we use connect higher order component from react-redux library
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
