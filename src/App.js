import logo from './logo.svg';
import './App.css';
import './signinpage/signin'
import Signin from './signinpage/signin';
import Signuppage from './signuppage/signuppage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';




function App() {
  return (
    <Router>
  <>

  <Routes>
    
      <Route exact path='/' element={<Signin />}/>
      {/* <Route exact path='/signin' element={<Signuppage />}/> */}
    <Route exact path='/signuppage' element={<Signuppage />}/>
    
  </Routes>
 

  </>
  </Router>
  );
}

export default App;
