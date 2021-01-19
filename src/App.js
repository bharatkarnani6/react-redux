import './App.css';
import { Provider } from 'react-redux'
import BookComponent from './Component/BookComponent'
import HookBookComponent from './Component/HookBookComponent';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookBookComponent />
        <br></br><br></br>
        <BookComponent />
      </div>
    </Provider>
  );
}

export default App;
