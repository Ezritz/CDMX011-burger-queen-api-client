import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

//pages y components

function AppRoutes() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/orders" element={<Home/>}/>
          <Route exact path="/" element={<Login/>}/>
          
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
