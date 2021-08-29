import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles.css";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
//to provide redux store to react application react-redux exports an component called provider.

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <br />
        <HookCakeContainer />
        <br />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}
