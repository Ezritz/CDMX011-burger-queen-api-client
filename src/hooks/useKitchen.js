import { useState, useEffect } from 'react';

export const useKitchen = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [isPending, setIsPending] = useState(false);
  
  const showBr = () => {
    setIsPending(true);

    try {
      
      if (!isPending) {
        setIsPending();
        
      }
    }
    catch(err) {
      if (!isCancelled) {
        console.log(err.message);
        console.log('hola');
        setIsPending(false);
      }
      
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true); // cleanup function
  }, [])

  return { showBr, isPending };
}