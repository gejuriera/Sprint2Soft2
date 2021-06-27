import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../views/HomeScreen'
import LoginScreen from '../views/LoginScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'


import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerContent } from '../views/DrawerContent'
import MainTabScreen from '../views/MainTabScreen';



const Drawer = createDrawerNavigator();

//importar state de context
import FirebaseState from '../context/firebase/firebaseState'
import ReservaState from '../context/reserva/reservaState'







const DrawerNav = () => {
    return (
        <FirebaseState>
            <ReservaState>

                

                    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
                        <Drawer.Screen name="HomeStack" component={MainTabScreen} />
                        <Drawer.Screen name="Notifications" component={LoginScreen} />

                    </Drawer.Navigator>

               

            </ReservaState>
        </FirebaseState>






    )
}

export default DrawerNav;