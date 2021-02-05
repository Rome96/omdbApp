import _ from "lodash";
import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { View, FlatList, ActivityIndicator } from 'react-native';

import RenderFilm from './RenderFilm';
import NotFound from '@Screens/NotFound';
import { getfilmsName, searchFilmsText, pageFilms } from '@Redux/actions/films';

const FilmsList = () => {
  const { getFilms, notFound, searchFilms, loading} = useSelector(state => state.films);
  const dispatch = useDispatch();
  const [pagec, setPage] = useState(1)

  // console.log('searchFilms =>', getFilms)

  const _onEndReached = () => {
    setPage(c => c + 1)
    dispatch(getfilmsName(searchFilms, pagec))
  };

  return (
    <View>
      <FlatList
        data={getFilms}
        extraData={getFilms}
        // onEndReached={_onEndReached}
        onEndReachedThreshold={0}
        renderItem={({item}) => <RenderFilm {...item} />}
        keyExtractor={(item) => item.imdbID}
        ListFooterComponent={
          !!loading && (
            <View
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ActivityIndicator size="large" color="2eb872" />
            </View>
          )
        }
        />
        { notFound && <NotFound /> }
    </View>
  )
}

export default FilmsList;
