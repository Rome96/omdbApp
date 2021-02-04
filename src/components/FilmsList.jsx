import React from 'react'
import { useSelector } from 'react-redux';
import { View, FlatList } from 'react-native';

import RenderFilm from './RenderFilm';
import NotFound from '@Screens/NotFound';

const FilmsList = () => {
  const { getFilms, notFound} = useSelector(state => state.films);

  return (
    <View>
      <FlatList
        data={getFilms}
        renderItem={({item}) => <RenderFilm {...item} />}
        keyExtractor={item => item.imdbID}
        />
        { notFound && <NotFound /> }
    </View>
  )
}

export default FilmsList;
