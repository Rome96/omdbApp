import React from 'react'
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const IntroApp = () => {
  const { 
    Plot,
    Genre,
    Actors,
    Writer,
    Director,
  } = useSelector(state => state.films.introApp)
  
  return (
    <View>
      <Text> actores: {Actors}</Text>
      <Text>Director: {Director}</Text>
      <Text> Trama: {Plot} </Text>
      <Text> Genero: {Genre}</Text>
      <Text>Escritores: {Writer}</Text>
    </View>
  )
};

export default IntroApp;
