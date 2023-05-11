import RootStore from "./model/store/RootStore";
import Routers from "./routers/Routes";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={RootStore}>
      <Routers />
    </Provider>
  );
}

export default App;
