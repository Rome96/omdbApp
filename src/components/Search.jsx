import _ from "lodash";
import React from 'react';
import { useDispatch } from 'react-redux';
import { AntDesign } from "@expo/vector-icons";
import {View, TextInput, StyleSheet} from 'react-native';

import { getfilmsName } from '@Redux/actions/films';

let __debouncing = null;

const Search = () => {
  const dispatch = useDispatch();
  
  const _searchFilms = async (text) => {
    dispatch(getfilmsName(text));
  };
  
  
  const searchFilms = text => {
    
    !!__debouncing && __debouncing.cancel();

    if (!text) {
      return (
        dispatch(getfilmsName([]))
      )
    }

    __debouncing = _.debounce(() => {
      return (
        _searchFilms(text)
      );
    }, 500);

    return __debouncing();
  };


  return <View style={styles.container}>
    <View style={styles.containerInput}>
      <View style={styles.containerIconSearch}>
          <AntDesign size={20} name="search1" style={{ color: "#FFF" }} />
      </View>
      <TextInput
        editable
        autoFocus
        selectTextOnFocus
        style={styles.input}
        autoCapitalize="none"
        placeholder='Search...'
        onChangeText={text => searchFilms(text)}
      />
    </View>
  </View>
}

const styles = StyleSheet.create({
  containerInput: {
    elevation: 15,
    borderRadius: 15,
    marginVertical: 15,
    shadowRadius: 5.46,
    shadowOpacity: 0.32,
    alignItems: "center",
    flexDirection: "row",
    // marginHorizontal: 20,
    paddingHorizontal: 20,
    shadowColor: "#F4F4F4",
    backgroundColor: "#FFF",
    shadowOffset: { width: 8, height: 8 },
  },
  containerIconSearch: {
    padding: 5,
    alignItems: "center",
    borderRadius: 40 / 2,
    justifyContent: "center",
    backgroundColor: "#abc2e8",
  },
  input: {
    width: "90%",
    marginLeft: 8,
    color: "#000",
    paddingVertical: 15,
  },

});
export default Search
