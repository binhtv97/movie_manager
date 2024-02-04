import {useEffect, useRef, useState} from 'react';

function useDebounce<T>(value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState<T>();
  const timerRef = useRef<any>();

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(value), delay);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
