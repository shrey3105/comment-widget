import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";

function App() {
  return (
    <div className="w-1/2 mt-10 mx-auto border-black shadow-lg bg-slate-200 p-8">
      <Provider store={appStore}>
        <Body></Body>
      </Provider>
    </div>
  );
}

export default App;
