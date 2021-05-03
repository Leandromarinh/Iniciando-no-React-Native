import React from 'react';

import { View, SafeAreaView, Text, StyleSheet, Image } from 'react-native';

import * as color from '../../Components/Constants/styles/colors';

export default function ProductInfo({ route }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.productInfoContainer}>
        <Text style={styles.productName}> {route.params.data.name}</Text>
        <Text style={styles.brandName}>Marca: {route.params.data.brand}</Text>
        <Image
          style={styles.productPicture}
          source={{
            uri: route.params.data.img 
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f3f3',
    marginTop: 20,
  },
  productInfoContainer: {
    height: 395,
    width: '85%',
    backgroundColor: color.white,
    alignSelf: 'center',
    marginTop: 80,
    borderRadius: 13,
  },
  productName: {
    color: '#0041a3',
    marginTop: 17,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
  brandName: {
    color: color.black,
    marginTop: 20,
    fontSize: 16,
    marginLeft: 25,
  },
  productPicture: {
    height: 250,
    width: 250,
    alignSelf: 'center',
    marginTop: 15,
  },
});
