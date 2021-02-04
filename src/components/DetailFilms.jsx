import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'
import DetailIntro from '@Components/DetailIntro';

const { width } = Dimensions.get('window')

const DetailFilms = ({route}) => {
	const { Title, Poster, Type, Year } = route.params.item

	return (
		<View style={styles.container}>
			<Image
        resizeMode="stretch"
        style={styles.img}
        source={{ uri: `${Poster}` }}
      />
				<View style={styles.containerDescription}>
					<ScrollView>
						<Text style={styles.description}> { Title } </Text>
						<Text style={styles.description}> { Type } </Text>
						<Text style={styles.description}> { Year } </Text>
						{/* <DetailIntro
							title='Title'
							description={Title}
						/>*/}
					</ScrollView>
				</View>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	img: {
    width: '100%',
    height: width - 110,
	},
	containerDescription: {
		flex: 1,
		paddingVertical: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	description: {
		textAlign: 'center',
		marginVertical: 10,
		fontSize: 20,
		fontWeight: '600'
	}
})

export default DetailFilms;