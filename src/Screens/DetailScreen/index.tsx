import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren, useEffect, useState} from 'react';
import LayOut from 'src/Components/Layout';
import RouteKey from 'src/Navigators/RouteKey';
import {DetailMovieI} from 'src/Store/types/movie';
import {MovieApi} from 'src/Services/Api/movie';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from 'src/Navigators/Types';
import {FontSizes, pf, ph, pw} from 'src/Themes';
import {CustomImage, Space} from 'src/Components';
import configs from 'src/Constanst/config';
import {useDispatch, useSelector} from 'react-redux';
import {getFavories} from 'src/Store/selectors/app';
import {appActions} from 'src/Store/reducers';

type Props = NativeStackScreenProps<AppStackParamList, RouteKey.DetailScreen> &
  PropsWithChildren;

const DetailScreen: React.FC<Props> = props => {
  const item = props.route.params.item;
  const id = item.id;
  const [detail, setDetail] = useState<DetailMovieI>();
  const dispatch = useDispatch();

  const getDetail = async () => {
    await MovieApi.movieDetail(id).then(res => {
      setDetail(res);
    });
  };
  const isFavories = useSelector(getFavories).find(
    _item => _item.id === detail?.id,
  );
  useEffect(() => {
    getDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const onPress = () => {
    if (isFavories) {
      dispatch(appActions.removeFavor(item.id));
    } else {
      dispatch(appActions.addFavor(item));
    }
  };

  return (
    <LayOut
      titileHeader={detail?.title ?? 'Detail Screen'}
      iconRight={[{icon: isFavories ? 'star' : 'star2', onPress: onPress}]}
      style={styles.container}>
      <ScrollView>
        <CustomImage
          uri={configs.IMAGE_URL + `/${detail?.poster_path}`}
          requireFastImage={true}
          resizeMode="stretch"
          style={styles.image}
        />
        <Text>
          Rating: <Text style={styles.rating}>{detail?.vote_average}</Text>
        </Text>
        <Text>Release Date: {detail?.release_date}</Text>
        <Text style={{lineHeight: pf(18)}}>
          Overview: {detail?.overview} `{detail?.adult && <Text>18+</Text>}
        </Text>
        <Space height={10} />
        <Text style={styles.rating}>Company</Text>
        <View style={styles.companyView}>
          {detail?.production_companies.map(item => {
            return (
              <View style={styles.company} key={item.id}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text>
                    Name: <Text style={styles.rating}>{item.name}</Text>
                  </Text>
                  <Text>
                    Country:
                    <Text style={styles.rating}>{item.origin_country}</Text>
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <CustomImage
                    uri={configs.IMAGE_URL + `/${item.logo_path}`}
                    requireFastImage={true}
                    resizeMode="stretch"
                    style={styles.logo}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </LayOut>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: pw(8),
  },
  image: {
    width: '100%',
    height: ph(350),
  },
  title: {
    fontSize: FontSizes.body,
    fontWeight: 'bold',
  },
  rating: {
    fontWeight: 'bold',
  },
  companyView: {
    width: '100%',
  },
  company: {
    paddingVertical: ph(8),
    flexDirection: 'row',
  },
  logo: {
    width: pw(50),
    height: pw(50),
  },
});
