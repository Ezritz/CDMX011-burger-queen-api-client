import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Orders from './components/Orders';
import Kitchen from './components/Kitchen';
import { useState, useEffect } from 'react';
import {
  getElements
} from './crud';
import { useAuthContext } from './hooks/useAuthContext';

//pages y components

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
  useEffect(() => {
    getElements('users').then((data) => setData(data))
  }, [])
  let type;
  let userData = data.filter((elem) => elem.email === user.email);
  type = userData[0].role;
  console.log(type);
  return type;
}

function HomeRoute() {
  const { user } = useAuthContext();
  if(user){
    Routing(user).then((userType) => {
      switch(userType){
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
    })    
  }
  
  return <Navigate to='/login'/>
}

function AppRoutes() {
  const { authIsReady } = useAuthContext();
  return (


    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          
          
          <Routes>
          <Route 
              path="/"
              element={
                <HomeRoute/>
            }/>
            <Route 
              path="/orders" 
              element={
                <OrdersRoute>
                  <Orders />
                </OrdersRoute>
              }/>
           
            <Route 
              path="/kitchen"
              element={
               <KitchenRoute>
                 <Kitchen />
               </KitchenRoute>
               
             }/>
            <Route 
              path='/login' 
              element={
                <LoginRoute>
                  <Login />
                </LoginRoute>
              }/>

            
             
          </Routes>
          
        </BrowserRouter>
      )}
      
    </div>
  );
}

export default AppRoutes;
