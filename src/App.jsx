import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
