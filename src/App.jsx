import { Provider } from "react-redux";
import { Body } from "./components";
import { appStore } from "./app/store";
function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
