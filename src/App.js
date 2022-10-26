import './App.css';
import Header from "./components/header/header.jsx";
import {Hero} from "./components/hero/hero";
import Contact  from './components/contacts/contact';
import { Provider } from 'react-redux';
import {store} from "./components/redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
      <Hero />
      <Header />
      <Contact />
      </Provider>
    </div>
  );
}

export default App;