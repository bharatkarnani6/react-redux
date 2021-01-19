import './App.css';
import { Provider } from 'react-redux'
import BookComponent from './Component/BookComponent'
import HookBookComponent from './Component/HookBookComponent';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookComponent />
        <br></br><br></br>
        <HookBookComponent />
      </div>
    </Provider>
  );
}

export default App;
