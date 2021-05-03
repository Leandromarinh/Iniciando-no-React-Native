import React from 'react';

import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Item({ name, navigation, data }) {
  function navigateToInfo() {
    navigation.navigate('ProductInfo', {
      data: data,
    });
  }
  return (
    <TouchableOpacity onPress={navigateToInfo} style={styles.itemContainer}>
      <Text style={styles.title}>Compra</Text>
      <Text style={styles.itemText}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#e9e7e7',
    borderRadius: 14,
    width: 216,
    height: 83,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  itemText: {
    color: '#0041a3',
    fontSize: 19,
  },
});
