import 'react-native-gesture-handler';

import React from 'react';

import { StyleSheet, Text, SafeAreaView, StatusBar, View } from 'react-native';

import Calculator from './src/Pages/Calculator';

import * as color from './src/Components/Constants/styles/colors';

import ShoppingListStack from './src/routes/ShoppingList.routes';

import { NavigationContainer } from '@react-navigation/native';

import HomeTabs from './src/routes/BottomTab.routes';

export default function App() {
  return (
    //<SafeAreaView>
    // <StatusBar backgroundColor={color.fluxo} />
    // <Calculator />
    //</SafeAreaView>
    <NavigationContainer>
      <StatusBar backgroundColor={color.fluxo} />
      <SafeAreaView style={styles.appContainer}>
        <ShoppingListStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
