import { useState, useCallback, useEffect, useRef } from 'react';

const useMounted = () => {
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return mountedRef;
};

export default function useSafeState<T>(initialState: T) {
  const [state, setState] = useState<T>(initialState);

  const mountedRef = useMounted();
  const safeSetState = useCallback(
    (updater: T) => {
      if (mountedRef.current) {
        setState(updater);
      }
    },
    [mountedRef],
  );

  return [state, safeSetState] as const;
}
