import React from 'react';
import {StyleSheet, View} from 'react-native';
import {metrics} from '../../Themes';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Image
        source={Images.fullLogo}
        resizeMode={'contain'}
        style={styles.logo}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBar: {
    position: 'absolute',
    bottom: metrics.huge,
    alignSelf: 'center',
  },
});

export default SplashScreen;
