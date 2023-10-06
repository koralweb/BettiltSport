import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import product from '../mobx/product';
import Counter from './Counter';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const BasketProduct = ({prod}) => {
  return (
    <View style={styles.cont}>
      <Image source={prod.image} style={styles.image} />
      <View style={styles.list}>
        <Text style={styles.title}>{prod.title}</Text>
        <Text style={styles.price}>{prod.price}р</Text>
      </View>
      <View style={styles.wrp}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => product.removeProduct(prod.id)}>
          <FontAwesomeIcon icon={'trash'} color={'white'} size={20} />
        </TouchableOpacity>
        <Counter />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    backgroundColor: '#252525',
    marginBottom: 20,
    borderRadius: 15,
    height: 120,
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    borderRadius: 15,
    marginLeft: 20,
  },
  price: {
    fontSize: 15,
    fontWeight: '500',
    color: '#FECD31',
    marginLeft: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
    width: '60%',
    marginLeft: 20,
    marginBottom: 10,
    paddingTop: 20,
  },
  list: {
    width: '50%',
  },
  wrp: {
    alignSelf: 'center',
  },
  icon: {
    marginBottom: 30,
    paddingLeft: 50,
  },
});
export default BasketProduct;
