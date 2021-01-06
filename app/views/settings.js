import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function Settings({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings</Text>
        <Text>Hola</Text>
      <Button
        onPress={() => {}}
        title="Go to notifications"
      />
    </View>
  );
}

export default Settings;