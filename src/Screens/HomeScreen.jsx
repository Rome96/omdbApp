import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {View, StyleSheet, Dimensions} from 'react-native';

import IntroApp from './IntroApp';
import Search from '@Components/Search';
import FilmsList from '@Components/FilmsList';
import { getfilmsName } from '@Redux/actions/films';

const HomeScreen = () => {
	const dispatch = useDispatch();
	const { startApp, getFilms } = useSelector(state => state.films);

	// console.log('PAGE STATE => ', page)
	console.log('FILMS STRORE =>', getFilms.length)

	useEffect(() => {
		dispatch(getfilmsName([]));
	}, [])

	return <View style={styles.container}>
		<Search />
		{ startApp ? <IntroApp /> : <FilmsList /> } 
	</View>
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10,
		paddingBottom: 10
	}
})

export default HomeScreen;