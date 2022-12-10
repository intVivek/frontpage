import './App.css';
import store from './Store';
import DashBoard from './Pages/DashBoard/DashBoard';
import { Provider } from "react-redux";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<DashBoard/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
