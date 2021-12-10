import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useAuthContext } from './useAuthContext'; 

const cookies= new Cookies();
export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    // sign the user out
    try {
      await 

      // dispatch logout action
      dispatch({ type: 'LOGOUT' });

      // update state
      if (!isCancelled) {
        setIsPending();
        setError(null);
      }
    }
    catch(err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
      
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true); // cleanup function
  }, [])

  return { logout, error, isPending };
}