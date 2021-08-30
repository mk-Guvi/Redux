import { BUY_CAKE } from "./cakeTypes";

// export const buyCake = () => {
//
//   return {
//     type: BUY_CAKE
//   };
// };

//since we are making the number of cakes to be bought are enterered in input filed we are passing it as argument and its f=default value will be 1
export const buyCake = (number = 1) => {
  //since we are making the number of cakes to be bought are enterered in input filed we are passing it as argument and its f=default value will be 1
  return {
    type: BUY_CAKE,
    payload: number
  };
};
