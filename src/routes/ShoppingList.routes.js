import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ShoppingList from '../Pages/ShoppingList';

import ProductInfo from '../Pages/ProductInfo';

import * as color from '../Components/Constants/styles/colors';

const Stack = createStackNavigator();

export default function ShoppingListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ShoppingList'
        component={ShoppingList}
        options={{
          headerTitle: 'Lista de Compras',
          headerStyle: {
            backgroundColor: color.fluxo,
          },
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: color.white,
          },
        }}
      />
      <Stack.Screen
        name='ProductInfo'
        component={ProductInfo}
        options={{
          headerTitle: 'Mais Informações',
          headerStyle: {
            backgroundColor: color.fluxo,
          },
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: color.white,
          },
        }}
      />
    </Stack.Navigator>
  );
}
