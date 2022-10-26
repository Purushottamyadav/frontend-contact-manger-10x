import './App.css';
import Header from "./components/header/header.jsx";
import { Hero } from "./components/hero/hero";
import Contact from './components/contacts/contact';
import { Provider } from 'react-redux';
import { store } from "./components/redux/store";
import './components/signinpage/signin'
import Signin from './components/signinpage/signin';
import Signuppage from './components/signuppage/signuppage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>

            <Route exact path='/' element={<Signin />} />
            {/* <Route exact path='/signin' element={<Signuppage />}/> */}
            <Route exact path='/signuppage' element={<Signuppage />} />
            <Route exact path='/homePage' element={<><Hero /><Header/><Contact /></>} />
            {/* <Hero />
            <Header />
            <Contact /> */}

          </Routes>
        </Router>
      </Provider>

    </div>


  )


}

export default App;