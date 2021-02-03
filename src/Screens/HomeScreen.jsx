import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import FilmsList from '@Components/FilmsList';
import Search from '@Components/Search';
import { api } from '../api';

const HomeScreen = ({navigation}) => {
	const [films, setFilms] = useState([])
	useEffect(() => {
		getFilmsName()
	}, [])

	const getFilmsName = async () => {
		const {Search, Response, errors} = await api.getFilmsName();
		// console.log('RESPUESTA =>', !res.erros)
		if (!errors || Response === 'True') {
			setFilms(Search)
		} else {
			console.log('error en la peticion')
		}
	}

	return <View style={styles.container}>
		<Search />
		<FilmsList films={films}/>
	</View>
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10,
	}
})

export default HomeScreen;