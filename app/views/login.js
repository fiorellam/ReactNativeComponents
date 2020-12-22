import React from 'react';
import { View, Text, ImageBackground, StyleSheet} from 'react-native';
import { Input, Button } from 'react-native-elements';


const Login = ({navigation}) => {
  return (
    <ImageBackground source={require("../assets/Bg.png")} style={styles.image}>
      <View style={styles.inputs}>
        <Text style={styles.title}>Login</Text>
        <Input
          placeholder='Email'
          leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
        />
        <Button 
          onPress={() => navigation.navigate('CreateUser')} 
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
  },

})


export default Login;
