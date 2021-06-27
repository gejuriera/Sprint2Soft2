import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Text,
    TouchableRipple,
    Switch,
    Drawer
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext } from '../navigation/AuthProvider';
import Iconx from 'react-native-vector-icons/Ionicons';

export function DrawerContent(props) {
    const{user,logout} = useContext(AuthContext);
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://perro.shop/wp-content/uploads/pug.jpg'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: "column" }}>
                                <Title style={styles.title}>Christian Portilla</Title>
                                <Caption style={styles.Caption}>@poplays</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption styke={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>60</Paragraph>
                                <Caption styke={styles.caption}>Following</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.bottomDrawerSection}>

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Home'
                            onPress={() => {props.navigation.navigate('Home')}}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Editar Perfil'
                            onPress={() => { props.navigation.navigate('Perfil')}}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="bed-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Habitaciones'
                            onPress={() => { props.navigation.navigate('Habitaciones')}}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="bike"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Actividades'
                            onPress={() => {props.navigation.navigate('Actividades') }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            {/*ESTO ES EL APARTADITO DE CERRAR CESION */}
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label='Cerrar Sesion'
                    onPress={() => {logout() }}

                />

            </Drawer.Section>

        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 25,
    },
    bottomDrawerSection: {
        marginBottom: 25,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },

});

