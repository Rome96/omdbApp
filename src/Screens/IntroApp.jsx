import React from 'react'
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import DetailIntro from '@Components/DetailIntro';

const { width } = Dimensions.get('window')

const IntroApp = () => {
  const { 
    Plot,
    Genre,
    Actors,
    Poster,
    Director,
    Released,
    Production
  } = useSelector(state => state.films.introApp)
  
  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        style={styles.img}
        source={{ uri: `${Poster}` }}
      />
      <ScrollView>
        <DetailIntro 
          title='Director'
          description={Director}
        />
        <DetailIntro 
          title='Actors'
          description={Actors}
        />
        <DetailIntro 
          title='Genre'
          description={Genre}
        />
        <DetailIntro 
          title='Released'
          description={Released}
        />
        <DetailIntro 
          title='Plot'
          description={Plot}
        />
        <DetailIntro 
          title='Production'
          description={Production}
        />
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  img: {
    width: '100%',
    height: width - 110,
    borderRadius: 10,
    marginBottom: 10
  },
});

export default IntroApp;
