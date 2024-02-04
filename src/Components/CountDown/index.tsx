import moment from 'moment';
import React from 'react';
import {useRef} from 'react';
import {useEffect} from 'react';
import {
  AppState,
  AppStateStatus,
  StyleProp,
  Text,
  ViewStyle,
} from 'react-native';
import useSafeState from 'hook/useSafeState';

export interface TimerProps {
  afterCountDownFnc?: () => {};
  style?: StyleProp<ViewStyle>;
  initialSeconds: number;
}
export const Timer = ({
  afterCountDownFnc,
  style,
  initialSeconds,
}: TimerProps) => {
  let intervalTimeBySecond = 1000;
  const [seconds, setSeconds] = useSafeState(initialSeconds);
  const timeEnd = useRef(moment().add(300, 'seconds').unix());
  const [appStateVisible, setAppStateVisible] = useSafeState<AppStateStatus>(
    AppState.currentState,
  );

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      setAppStateVisible(nextAppState);
    });
    return () => {
      subscription.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let timeCount = intervalTimeBySecond - new Date().getMilliseconds();
    let timeout = setTimeout(() => {
      if (seconds > 0) {
        let uff = timeEnd.current - moment().unix();
        setSeconds(uff);
      }
      if (seconds === 1) {
        clearInterval(timeout);
        if (afterCountDownFnc) {
          afterCountDownFnc();
        }
      }
    }, timeCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds, appStateVisible]);
  return (
    <>
      {seconds === 0 ? null : (
        <Text style={[{textAlign: 'center'}, style]}>
          {seconds < 10 ? `0${seconds}s` : `${seconds}s`}
        </Text>
      )}
    </>
  );
};
