/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';

import {Colors } from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import AppStack from './app/navigator/stack';
import MyDrawer from './app/navigator/DrawerContainer';

const App: () => React$Node = () => {
  return (
    <>
    {/* <AppStack></AppStack> */}
    <MyDrawer/>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
