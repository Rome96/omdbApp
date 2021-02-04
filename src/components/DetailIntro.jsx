import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const DetailIntro = props => {
  const { title, description } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> { title } </Text>
      <Text style={styles.description}> { description } </Text>
    </View>
  );
};

DetailIntro.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 2,
    color: '#1b262c'
  },
  description: {
    fontSize: 15,
    color: '#393e46',
    marginBottom: 5
  }
});

export default DetailIntro;
