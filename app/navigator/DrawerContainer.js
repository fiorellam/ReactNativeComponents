import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../views/Home';
import { DrawerContent } from './DrawerContent';
import Settings from '../views/Home'
import Login from '../views/Login';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={Home} options={{ //Recibe un objeto o una funcion que regrese un objeto
                // title: 'Screen'
                headerShown: true,
            }} />
        <Drawer.Screen name="Settings" component={Settings} options={{ //Recibe un objeto o una funcion que regrese un objeto
                // title: 'Screen'
                headerShown:true,
            }} />
        <Drawer.Screen name="Login" component={Login} options={{ //Recibe un objeto o una funcion que regrese un objeto
                // title: 'Screen'
                headerShown:false,
            }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}