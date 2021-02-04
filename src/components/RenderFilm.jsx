import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const RenderFilm = item => {
  const navigation = useNavigation();
  const { Title, Poster } = item;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Detail', {item})}
    >
      <View style={styles.containerImg}>
        <Image
          resizeMode="stretch"
          style={styles.img}
          source={{ uri: `${Poster}` }}
        />
      </View>
      <View style={styles.containerTitle}>
        <Text>{Title}</Text>
      </View>
    </TouchableOpacity>
  );
};

RenderFilm.propTypes = {
  item: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 3,
    backgroundColor: '#f6f5f5',
    marginVertical: 5,
    // paddingVertical: 20,
    // paddingHorizontal: 5,
    borderRadius: 10,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  containerImg: {
    flex: 1
  },
  img: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  containerTitle: {
    flex: 6,
    paddingVertical: 20,
    justifyContent: 'center',
    paddingHorizontal: 10
  }
});

export default RenderFilm;