import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RenderFilm = item => {
  const navigation = useNavigation();
  const { Title } = item;

  return <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
      <Text>{Title}</Text>
    </TouchableOpacity>
  </View>
};

RenderFilm.propTypes = {
  item: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    marginVertical: 5,
    padding: 20,
    borderRadius: 10,
  }
});

export default RenderFilm;