import { useState, useEffect } from 'react';
import {Login} from '../lib/fakeServer';
import {useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logIn = async (email, password) => {
    setError(null);
    setIsPending(true);

    // sign in user
    try {
      const res = await Login(email,password);

      // dispatch logIn action
      // dispatch({ type: 'LOGIN', payload: res.user });

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

  return { logIn, error, isPending };
}