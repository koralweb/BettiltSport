import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const EmptyBasket = () => {
  return (
    <View style={styles.cont}>
      <Text style={styles.title}>Košarica je prazna</Text>

      <Image style={styles.z3} source={require('../images/z3.png')} />
      <Image style={styles.image} source={require('../images/logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    alignSelf: 'center',
    height: 650,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  title: {
    fontSize: 30,
    color: '#FECD31',
  },
  image: {
    width: 870 / 3,
    height: 113 / 3,
    alignSelf: 'center',
    marginTop: 'auto',

    zIndex: 0,
  },
  z3: {
    position: 'absolute',
    width: 479 / 3,
    height: 415 / 3,
    zIndex: 3,
    bottom: 0,
  },
});

export default EmptyBasket;
