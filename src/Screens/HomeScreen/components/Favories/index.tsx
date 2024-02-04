import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {MovieI} from 'src/Store/types/movie';
import {useDispatch, useSelector} from 'react-redux';
import {getFavories} from 'src/Store/selectors/app';
import {CustomImage} from 'src/Components';
import {pw} from 'src/Themes';
import {appActions} from 'src/Store/reducers';

interface FavoriesProps {
  item: MovieI;
}
const Favories = ({item}: FavoriesProps) => {
  const isFavories = useSelector(getFavories).find(
    _item => _item.id === item.id,
  );

  const dispatch = useDispatch();

  const onPress = () => {
    if (isFavories) {
      dispatch(appActions.removeFavor(item.id));
    } else {
      dispatch(appActions.addFavor(item));
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CustomImage name={isFavories ? 'star' : 'star2'} style={styles.image} />
    </TouchableOpacity>
  );
};

export default Favories;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: pw(10),
  },
  image: {
    width: pw(15),
    height: pw(15),
    resizeMode: 'contain',
  },
});
