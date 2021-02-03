import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const HomeScreen = ({navigation}) => {
	return <View style={styles.container}>
		<Text> HomeScreen </Text>
		<Button title="detail" onPress={() => navigation.navigate('Detail')}/>
	</View>
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default HomeScreen;