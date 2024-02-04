import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, ph, pw} from 'src/Themes';
import {CustomImage} from '../Image';

interface SearchBarProps {
  style?: StyleProp<TextStyle>;
  value: string;
  onChangeText?: (str: string) => void;
  onRemove?: () => void;
}

const SearchBar = ({style, value, onChangeText, onRemove}: SearchBarProps) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, style]}
      />
      <TouchableOpacity style={styles.position} onPress={onRemove}>
        <CustomImage name="icon_close" style={styles.close} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: ph(5),
  },
  input: {
    width: '90%',
    backgroundColor: colors.sky,
    height: ph(35),
    borderRadius: pw(7),
    paddingHorizontal: pw(5),
  },
  close: {
    width: pw(15),
    height: pw(15),
    resizeMode: 'contain',
  },
  position: {
    position: 'absolute',
    right: pw(30),
  },
});
