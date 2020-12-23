import React from 'react';
import { View, Text, ImageBackground, StyleSheet} from 'react-native';
import { Input, Button } from 'react-native-elements';

const CreateUser = ({navigation}) => {
  return (
    <ImageBackground source={require("../assets/Bg.png")} style={styles.image}>
      <View style={styles.inputs}>
        <Text style={styles.title}>Create User</Text>
        <Input
          placeholder='Name'
          leftIcon={{ type: 'font-awesome', name: 'user-o' }}
        />
        <Input
          placeholder='Email'
          leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
        />
        <Input
          placeholder='Password'
          leftIcon={{ type: 'font-awesome', name: 'code' }}
        />
        <Button 
          onPress={() => navigation.navigate('Login')} 
          title="Crear Usuario"
          buttonStyle={{ backgroundColor: "#9CCB5B" }}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    paddingBottom: 30
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  inputs: {
    flex:1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  }
})

export default CreateUser;
