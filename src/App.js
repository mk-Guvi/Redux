import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/cake/store";
import "./styles.css";
import HookCakeContainer from "./components/HookCakeContainer";
//to provide redux store to react application react-redux exports an component called provider.

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <br />
        <HookCakeContainer />
      </div>
    </Provider>
  );
}
