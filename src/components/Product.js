import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react-lite';

const Product = ({prod, productPress}) => {
  return (
    <TouchableOpacity
      style={styles.cont}
      key={prod.title}
      onPress={() => productPress(prod)}>
      <View>
        <Image style={styles.image} source={prod.image} />
        <Text style={styles.title}>{prod.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cont: {
    width: '45%',
    height: 220,
    margin: 10,
    backgroundColor: '#252525',
    borderRadius: 15,
    paddingTop: 25,
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    borderRadius: 15,
  },
  title: {
    color: 'white',
    alignSelf: 'center',
    paddingTop: 10,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default observer(Product);
