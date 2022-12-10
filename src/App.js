import './App.css';
import store from './Store';
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      </div>
    </Provider>
  );
}

export default App;
