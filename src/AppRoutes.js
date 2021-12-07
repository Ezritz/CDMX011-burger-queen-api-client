import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Orders from './components/Orders';
import Breakfast from './components/Breakfast';
import Kitchen from './components/Kitchen';

import { useAuthContext } from './hooks/useAuthContext';

//pages y components

function OrdersRoute({ children }) {
  const { user } = useAuthContext();
  return user ? children : <Navigate to='/login'/>
}

function LoginRoute({ children }) {
  const { user } = useAuthContext();
  return user ? <Navigate to='/orders'/>: children;
}

function HomeRoute() {
  const { user } = useAuthContext();
  return user ? <Navigate to='/orders'/>: <Navigate to='/login'/>
}

function BreakfastRoute() {
  const { user } = useAuthContext();
  return user ? <Navigate to='/breakfast'/>: <Navigate to='/lunch'/>
}

function KitchenRoute() {
  const {user} = useAuthContext();
  return user ? <Navigate to='/kitchen'/>: <Navigate to='/login'/>
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
              path="/breakfast"
              element={
                <BreakfastRoute>
                  <Breakfast />
                </BreakfastRoute>
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
