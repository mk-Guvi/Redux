import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles.css";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeCOntainer from "./components/NewCakeCOntainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
//to provide redux store to react application react-redux exports an component called provider.

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <br />
        <ItemContainer />
        {/* cake is a passed as prop */}
        <ItemContainer cake />

        <CakeContainer />
        <br />
        <HookCakeContainer />
        <br />
        <IceCreamContainer />
        <br />
        <NewCakeCOntainer />
      </div>
    </Provider>
  );
}
