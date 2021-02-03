import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { AntDesign } from "@expo/vector-icons";

const Search = () => {
  const [value, onChangeText] = React.useState('');

  return <View style={styles.container}>
    <View style={styles.containerInput}>
      <View style={styles.containerIconSearch}>
          <AntDesign size={20} name="search1" style={{ color: "#FFF" }} />
      </View>
      <TextInput
        value={value}
        editable
        autoFocus
        selectTextOnFocus
        style={styles.input}
        autoCapitalize="none"
        placeholder='Search...'
        onChangeText={text => onChangeText(text)}
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
    justifyContent: "center",
    backgroundColor: "#abc2e8",
    borderRadius: 40 / 2,
  },
  input: {
    width: "90%",
    marginLeft: 8,
    color: "#000",
    paddingVertical: 15,
  },

});
export default Search
