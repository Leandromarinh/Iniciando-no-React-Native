import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import * as color from '../Constants/styles/colors';

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    backgroundColor: color.fluxo,
    justifyContent: 'center',
  },
  headerTitle: {
    color: color.white,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
});
