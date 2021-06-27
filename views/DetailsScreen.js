import React from 'react';
import { Button, Text, View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'





const DetailsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Detalle Screen</Text>
            <Button
                title='Ir a los detalles de pantalla'
                onPress={() => navigation.navigate('Details')}>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }
  })

export default DetailsScreen;