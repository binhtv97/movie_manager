import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {FontSizes, colors, pf, ph} from 'src/Themes';
import configs from 'src/Constanst/config';
import {MovieI} from 'src/Store/types/movie';
import {CustomImage} from 'src/Components';
import Favories from '../Favories';
import RouteKey from 'src/Navigators/RouteKey';
import {navigate} from 'src/Navigators/RootNavigation';

interface MovieItemProps {
  item: MovieI;
}

const MovieHomeItem = ({item}: MovieItemProps) => {
  const [overview, setOverview] = useState<boolean>(false);

  const onNavigate = () => {
    navigate(RouteKey.DetailScreen, {
      item: item,
    });
  };
  return (
    <TouchableOpacity style={[styles.container]} onPress={onNavigate}>
      <CustomImage
        uri={configs.IMAGE_URL + `/${item?.poster_path}`}
        requireFastImage={true}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={[styles.itemRight]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>
          Rating: <Text style={styles.rating}>{item?.vote_average}</Text>
        </Text>
        <Text>Release Date: {item?.release_date}</Text>
        <Text style={{lineHeight: pf(18)}}>
          Description:{' '}
          {overview
            ? `${item?.overview} `
            : `${item?.overview?.substring(0, 80)}... `}
          <TouchableOpacity onPress={() => setOverview(pre => !pre)}>
            <Text style={[styles.readMore]}>
              {overview ? 'Read less' : 'Read More'}
            </Text>
          </TouchableOpacity>
          {item?.adult && <Text>18+</Text>}
        </Text>
      </View>
      <Favories item={item} />
    </TouchableOpacity>
  );
};

export default MovieHomeItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: ph(5),
  },
  image: {
    width: ph(130),
    height: ph(130),
  },
  itemRight: {
    flex: 1,
  },
  title: {
    fontSize: FontSizes.body,
    fontWeight: 'bold',
  },
  readMore: {
    color: colors.blue,
    position: 'absolute',
    bottom: -2,
  },
  rating: {
    fontWeight: 'bold',
  },
});
