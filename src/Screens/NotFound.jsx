import React from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { View, Text, StyleSheet } from 'react-native';

const NotFound = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="close" size={50} color="black" />
      <Text style={styles.title}> 404 </Text>
      <Text style={styles.description}> Movie not found </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginVertical: 10
  },
  description: {
    fontSize: 30,
    fontWeight: '600',
  }
})
export default NotFound
