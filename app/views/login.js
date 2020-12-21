import React from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Login = ({navigation}) => {
  return (
    <>
    <Text>Login</Text>
    <Button onPress={() => navigation.navigate('CreateUser')} title="CrearUsuario">Crear Usuario</Button>

    </>
  );
};

export default Login;
