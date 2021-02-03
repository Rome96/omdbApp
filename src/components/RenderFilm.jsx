import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const RenderFilm = item => {
  const navigation = useNavigation();
  const { Title } = item;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
      <Text>{Title}</Text>
    </TouchableOpacity>
  )
};

export default RenderFilm;