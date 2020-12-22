import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Screen

import Routes from './stackRoutes';

const Stack = createStackNavigator();

function AppStack() {
  return (

    // Por lo general stack navigator necesita un container para manejar los
    // estados de la pantalla o de la navegación
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
            name="Login" 
            component={Routes.Login}
            options={{ //Recibe un objeto o una funcion que regrese un objeto
                // title: 'Screen'
                headerShown: false,
            }} 
            />
        <Stack.Screen 
          name="CreateUser" 
          component={Routes.CreateUser}
          options={{ 
            headerShown: false,
          }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppStack;