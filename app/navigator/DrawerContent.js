import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Title, Text, Drawer } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

export function DrawerContent(props){
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View>
                        <Avatar.Image
                            source={{uri: 'https://image.flaticon.com/icons/png/512/206/206853.png'}}
                            size={100}
                        />
                    </View>
                    <Text>Content</Text>
                </View>
            <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon 
                            name="home-outline" color={color} size={size}
                        />
                    )}
                    label="Home"
                    onPress={() => {props.navigation.navigate('Home')}}
                />
                 <DrawerItem
                    icon={({color, size}) => (
                        <Icon 
                            name="account-check-outline" color={color} size={size}
                        />
                    )}
                    label="Settings"
                    onPress={() => {props.navigation.navigate('Settings')}}
                />                
            </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon 
                            name="exit-to-app" color={color} size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {props.navigation.navigate('Login')}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent:{
        flex:1
    },
    userInfoSection:{
        paddingLeft: 20,
    },
    title:{
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    drawerSection:{
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})