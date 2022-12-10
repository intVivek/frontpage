import './App.css';
import store from './Store';
import HomePage from './Pages/HomePage';
import { Provider } from "react-redux";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="*" element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
