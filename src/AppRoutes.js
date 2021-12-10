import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Orders from './components/Orders';
import Kitchen from './components/Kitchen';

//pages y components
/*
function KitchenRoute({children}) {
  const { user } = useAuthContext();
  return user ? children : <Navigate to='/login'/>
}

function OrdersRoute({ children }) {
  const { user } = useAuthContext();
  return user ? children : <Navigate to='/login'/>
}

function LoginRoute({ children }) {
  const { user } = useAuthContext();
  if(user){
    console.log('hay usuario');
    let userType = Routing(user);
    console.log('userType', userType);
    switch(userType){
      case 'chef': 
      console.log('kitchen')  
      return <Navigate to='/kitchen' />;
      case 'waitress': 
      console.log('orders')
      return <Navigate to='/orders' />;
      
    }
    
  }
  
  return children;
}
function Routing(user) {
  const [data, setData] = useState([]);
  const [type, setType] = useState();
  useEffect(() => {
    
    getElements('users').then((data) => {setData(data) 
      let userData = data.filter((elem) => elem.email === user.email);
      setType(userData[0].role);
      console.log('userData', userData);
    })
    
    
  }, [])
  
  
  
  console.log('Data', data);
  console.log('type', type);
  return type;
}

function HomeRoute() {
  const { user } = useAuthContext();
  if(user){
    // Routing(user).then((userType) => {
      switch(Routing(user)){
        case 'chef': 
        console.log('kitchen')  
        return <Navigate to='/kitchen' />;
        case 'waitress': 
        console.log('orders')
        return <Navigate to='/orders' />;
        default : 
        console.log('login')
        return <Navigate to='/login' />;
      }
    //}    
  }
  
  return <Navigate to='/login'/>
}
*/



function AppRoutes() {
  // const { authIsReady } = useAuthContext();

  

  return (


    <div className="App">
      
        <BrowserRouter>
          
          <Routes>
          
            <Route 
              path="/orders" 
              element={
                <Orders />
                
              }/>
            
            <Route 
              path='/' 
              element={
               <Login />
                
              }/>

            <Route 
              path="/kitchen" 
              element={
               <Kitchen />
                
            }/>
          </Routes>
          
        </BrowserRouter>
     
      
    </div>
  ); 
}

export default AppRoutes;
