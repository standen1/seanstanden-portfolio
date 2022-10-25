import {useState, useCallback, useEffect} from 'react';

export const useMediaQuery = (width: string) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e: any) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addEventListener('resize', updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeEventListener('resize', updateTarget);
    }, []);
  
    return targetReached;
  };
  