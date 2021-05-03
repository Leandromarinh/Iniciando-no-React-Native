import React, { useState } from 'react';

import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Item from '../../Components/Item';

import { AntDesign } from '@expo/vector-icons';

import * as color from '../../Components/Constants/styles/colors';

export default function ShoppingList({ navigation }) {
  const [list, setList] = useState([
    {
      id: 1,
      name: 'Iogurte',
      brand: 'Nestlé',
      img:
        'https://casafiesta.fbitsstatic.net/img/p/iogurte-nestle-natural-integral-copo-170g-70389/237258.jpg?w=800&h=800&v=no-change',
    },
    {
      id: 2,
      name: 'Maça',
      brand: 'Fuji',
      img:
        'https://cd.shoppub.com.br/cenourao/media/cache/bc/fb/bcfb65535991da734743e6ca1a3563b8.jpg',
    },
    {
      id: 3,
      name: 'Leite',
      brand: 'Italac',
      img:
        'https://carrefourbr.vtexassets.com/arquivos/ids/211134-800-auto?width=800&height=auto&aspect=true',
    },
    {
      id: 4,
      name: 'Sorvete',
      brand: 'Kibon',
      img: 'https://static.clubeextra.com.br/img/uploads/1/907/598907.png',
    },
    {
      id: 5,
      name: 'Feijão',
      brand: 'Qualitá',
      img: 'https://static.paodeacucar.com/img/uploads/1/837/633837.png',
    },
    {
      id: 6,
      name: 'Arroz',
      brand: 'Máximo',
      img:
        'https://www.distribuidoracaue.com.br/media/catalog/product/cache/1/thumbnail/600x800/9df78eab33525d08d6e5fb8d27136e95/a/r/arroz_tipo_1_maximo_5kg.jpg',
    },
    {
      id: 7,
      name: 'Carne',
      brand: 'Friboi',
      img:
        'https://www.beefpoint.com.br/wp-content/uploads/2020/02/492150-240x240.jpg',
    },
    {
      id: 8,
      name: 'Batata',
      brand: 'Pringles',
      img:
        'https://www.imigrantesbebidas.com.br/bebida/images/products/mini/54001-batata-pringles-original-114g.1603139188.jpg',
    },
  ]);

  function addItem() {
    const lastIndex = list.length - 1;

    const lastId = list[lastIndex].id;

    const newItem = {
      id: lastId + 1,
      name: 'Biscoito',
    };

    let newList = list;

    newList.push(newItem);

    setList(newList);
  }

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={list}
        //inverted={true}
        style={{ alignSelf: 'center' }}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Item name={item.name} data={item} navigation={navigation} />
        )}
      />
      <TouchableOpacity style={styles.floatButton} onPress={addItem}>
        <AntDesign name='pluscircle' size={40} color={color.fluxo} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: color.white,
    marginTop: 0,
  },
  floatButton: {
    position: 'absolute',
    marginTop: 650,
    marginLeft: 350,
  },
});
