import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//TRAYENDO
import NuevaReserva from './NuevaReserva'
import Habitacion from './Habitacion'
import DetalleHabitacion from './DetalleHabitacion'
import FormularioReserva from './FormularioReserva'
import ProgresoDeReserva from './ProgresoDeReserva'
import ResumenReserva from './ResumenReserva'
import Promociones from './Promociones'
import Actividades from './Actividades'
import ProfileScreen from './ProfileScreen'
import EditProfileScreen from './EditProfileScreen'

//importar state de context
import FirebaseState from '../context/firebase/firebaseState'
import ReservaState from '../context/reserva/reservaState'

//componentes
import BotonResumen from '../components/ui/BotonResumen'


const Tab = createMaterialBottomTabNavigator();
const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
        >
            <Tab.Screen
                name="Home"
                component={ProfileStackScreen}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarColor: '#1a6199',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-person" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={PromocionesStackScreen}
                options={{
                    tabBarLabel: 'Promociones',
                    tabBarColor: '#1a6199',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Habitaciones"
                component={ReservaStackScreen}
                options={{
                    tabBarLabel: 'Habitaciones',
                    tabBarColor: '#1a6199',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-bed" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="Actividades"
                component={ActividadesStackScreen}
                options={{
                    tabBarLabel: 'Actividades',
                    tabBarColor: '#1a6199',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-bicycle" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );

}

export default MainTabScreen;


const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();


const ProfileStackScreen = ({ navigation }) => (
    <ProfileStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#1a6199",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold"
            }
        }}
    >
        <ProfileStack.Screen 
        name="Profile"
        component={ProfileScreen}
        options={{
           
            headerLeft: () => (
                <Icon.Button
                    name='ios-menu' size={25}
                    backgroundColor='#1a6199' onPress={() => { navigation.openDrawer() }}>

                </Icon.Button>
            )
        }} />

        <ProfileStack.Screen 
        name="EditProfile" 
        component={EditProfileScreen} options={{
            headerTitle: "Editar Perfil",
            headerBackTitleVisible: 'false',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#1a6199',
                shadowColor: "#fff",
                evelation: 0,
            },
            headerRight: () => (
                <Icon.Button
                    name='ios-menu' size={25}
                    backgroundColor='#1a6199' onPress={() => { navigation.openDrawer() }}>

                </Icon.Button>
            )
        }} />

    </ProfileStack.Navigator>
)

const DetailsStackScreen = ({ navigation }) => (
    <DetailsStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#1a6199",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold"
            }
        }}
    >
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
            headerLeft: () => (
                <Icon.Button
                    name='ios-menu' size={25}
                    backgroundColor='#1a6199' onPress={() => { navigation.openDrawer() }}>

                </Icon.Button>
            )
        }} />
    </DetailsStack.Navigator>
)



//MUESTRA TODO LO QUE ES LA RESERVA
const Stack = createStackNavigator();
const ReservaStackScreen = ({ navigation }) => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#1a6199",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold"
            }
        }}
    >
        <Stack.Screen
            name="NuevaReserva"
            component={NuevaReserva}
            options={{
                title: 'Nueva Reserva',
                headerLeft: () => (
                    <Icon.Button
                        name='ios-menu' size={25}
                        backgroundColor='#1a6199' onPress={() => { navigation.openDrawer() }}>

                    </Icon.Button>
                )
            }}
        />

        <Stack.Screen
            name="DetalleHabitacion"
            component={DetalleHabitacion}
            options={{
                title: 'Detalle Habitacion',
                headerRight: () => (
                    <Icon.Button
                        name='ios-menu' size={25}
                        backgroundColor='#1a6199' onPress={() => { navigation.openDrawer() }}>

                    </Icon.Button>
                )
            }}
        />

        <Stack.Screen
            name="FormularioReserva"
            component={FormularioReserva}
            options={{
                title: 'Ordenar Reserva',
                headerRight: () => (
                    <Icon.Button
                        name='ios-menu' size={25}
                        backgroundColor='#1a6199' onPress={() => { navigation.openDrawer() }}>

                    </Icon.Button>
                )
            }}
        />

        <Stack.Screen
            name="ResumenReserva"
            component={ResumenReserva}
            options={{
                title: 'Resumen de Reserva',
                headerRight: () => (
                    <Icon.Button
                        name='ios-menu' size={25}
                        backgroundColor='#1a6199' onPress={() => { navigation.openDrawer() }}>

                    </Icon.Button>
                )
            }}
        />


        <Stack.Screen
            name="ProgresoDeReserva"
            component={ProgresoDeReserva}
            options={{
                title: 'Progreso',
                headerRight: () => (
                    <Icon.Button
                        name='ios-menu' size={25}
                        backgroundColor='#1a6199' onPress={() => { navigation.openDrawer() }}>

                    </Icon.Button>
                )
            }}
        />



        <Stack.Screen
            name="Habitacion"
            component={Habitacion}
            options={{
                title: 'Nuestras Habitaciones',
                headerRight: () => (
                    <Icon.Button
                        name='ios-menu' size={25}
                        backgroundColor='#1a6199' onPress={() => { navigation.openDrawer() }}>

                    </Icon.Button>
                )
            }}
        />



    </Stack.Navigator>
)



const PromocionesStack = createStackNavigator();
const PromocionesStackScreen = ({ navigation }) => (
    <PromocionesStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#1a6199",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold"
            }
        }}
    >
        <PromocionesStack.Screen
            name="Promociones"
            component={Promociones}
            options={{
                title: 'Promociones de temporada',
                headerLeft: () => (
                    <Icon.Button
                        name='ios-menu' size={25}
                        backgroundColor='#1a6199' onPress={() => { navigation.openDrawer() }}>

                    </Icon.Button>
                )
            }}
        />
    </PromocionesStack.Navigator>
)


const ActividadesStack = createStackNavigator();
const ActividadesStackScreen = ({ navigation }) => (
    <ActividadesStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#1a6199",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold"
            }
        }}
    >
        <ActividadesStack.Screen
            name="Actividades"
            component={Actividades}
            options={{
                title: 'Actividades en nuestra hosteria',
                headerLeft: () => (
                    <Icon.Button
                        name='ios-menu' size={25}
                        backgroundColor='#1a6199' onPress={() => { navigation.openDrawer() }}>

                    </Icon.Button>
                )
            }}
        />
    </ActividadesStack.Navigator>
)
