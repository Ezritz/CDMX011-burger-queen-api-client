import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

//pages y components

function AppRoutes() {
  return (
    <div className="App">
      <h1>Burger Queen</h1>
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/home" element={<Home/>}/>
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}
/*
class App extends Component {
  state ={
    user:{}
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    //comprueba si el usuario se a logeado
    fire.auth().onAuth
  }
}
*/
export default AppRoutes;
