import {RefreshControl, VirtualizedList} from 'react-native';
import React, {useEffect, useState} from 'react';
import LayOut from 'src/Components/Layout';
import MovieHomeItem from './components/MovieHomeItem';
import {MovieI} from 'src/Store/types/movie';
import SearchBar from 'src/Components/SearchBar';
import useDebounce from 'src/Hooks/useDebounce';
import {useDispatch, useSelector} from 'react-redux';
import {movieActions} from 'src/Store/reducers';
import {getMovie, getPage} from 'src/Store/selectors';
import {MovieApi} from 'src/Services/Api/movie';
import RouteKey from 'src/Navigators/RouteKey';
import {navigate} from 'src/Navigators/RootNavigation';

const getItem = (data: MovieI[], index: number): MovieI => data[index];

const HomeScreen = () => {
  const [pageSearch, setPage] = useState<number>(1);
  const [listSearch, setListSearch] = useState<MovieI[]>([]);

  const [search, setSearch] = useState<string>('');
  const debounceSearch = useDebounce(search);
  const movie = useSelector(getMovie);
  const page = useSelector(getPage);
  const dispatch = useDispatch();

  const onSearch = async () => {
    await MovieApi.searchMovie({
      name: search,
      page: pageSearch,
    }).then((res) => {
      setListSearch(res.results);
    });
  };

  useEffect(() => {
    onSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearch]);

  const onLoadMore = async () => {
    if (search.length > 0) {
      await MovieApi.searchMovie({
        name: search,
        page: pageSearch + 1,
      }).then(({results}: MovieI[]) => {
        const newData = [...listSearch].concat(results);
        setListSearch(newData);
        setPage(pre => pre + 1);
      });
    } else {
      dispatch(movieActions.getMore(page + 1));
    }
  };

  const onRefresh = () => {
    dispatch(movieActions.onRefresh());
  };

  useEffect(() => {
    dispatch(movieActions.getListMovie(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRemove = () => {
    setListSearch([]);
    setPage(1);
    setSearch('');
  };

  const navigateFavorScreen = () => {
    navigate(RouteKey.FavoriesScreen);
  };

  return (
    <LayOut
      titileHeader="Movie List"
      hasBack={false}
      iconRight={[{icon: 'star', onPress: navigateFavorScreen}]}>
      <SearchBar value={search} onChangeText={setSearch} onRemove={onRemove} />
      <VirtualizedList<MovieI>
        initialNumToRender={5}
        renderItem={({item}) => {
          return <MovieHomeItem item={item} />;
        }}
        keyExtractor={item => item.id.toString()}
        getItemCount={data => data.length}
        getItem={getItem}
        data={listSearch.length > 0 ? listSearch : movie}
        onEndReached={onLoadMore}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }
      />
    </LayOut>
  );
};

export default HomeScreen;
