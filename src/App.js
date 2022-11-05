import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Main/>
      </div>
    </Provider>
  );
}

export default App;
