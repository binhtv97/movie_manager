import {StyleSheet, Text, View, VirtualizedList} from 'react-native';
import React, {useEffect, useState} from 'react';
import LayOut from 'src/Components/Layout';
import {MovieI} from 'src/Store/types/movie';
import useDebounce from 'src/Hooks/useDebounce';
import SearchBar from 'src/Components/SearchBar';
import MovieHomeItem from '../HomeScreen/components/MovieHomeItem';
import {useSelector} from 'react-redux';
import {getFavories} from 'src/Store/selectors/app';

const getItem = (data: MovieI[], index: number): MovieI => data[index];

const FavoriesScreen = () => {
  const [listSearch, setListSearch] = useState<MovieI[]>([]);
  const [search, setSearch] = useState<string>('');
  const debounceSearch = useDebounce(search);
  const movie = useSelector(getFavories);

  const onSearch = async () => {
    const list = movie.filter(item => item.title?.includes(search));
    console.log('hhdsdsgsdg', list);
    setListSearch(list);
  };

  useEffect(() => {
    onSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearch]);

  const onRemove = () => {
    setListSearch([]);
    setSearch('');
  };
  return (
    <LayOut titileHeader="Favories List">
      <SearchBar value={search} onChangeText={setSearch} onRemove={onRemove} />
      <VirtualizedList<MovieI>
        initialNumToRender={5}
        renderItem={({item}) => {
          return <MovieHomeItem item={item} />;
        }}
        keyExtractor={item => item.id.toString()}
        getItemCount={data => data.length}
        getItem={getItem}
        data={search.length > 0 ? listSearch : movie}
        ListEmptyComponent={
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text>
              {movie.length === 0
                ? "DON'T HAVE ANY FAVORIES MOVIE"
                : 'MOVIE NOT FOUND'}
            </Text>
          </View>
        }
      />
    </LayOut>
  );
};

export default FavoriesScreen;

const styles = StyleSheet.create({});
