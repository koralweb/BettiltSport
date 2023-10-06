import React, {useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import products from '../data/products';
import Product from '../components/Product';
import OneProduct from '../components/OneProduct';

const StoreScreen = ({navigation}) => {
  const [tovar, setTovar] = useState(null);

  const productPress = prod => {
    setTovar(prod);
  };
  const closeOneProduct = () => {
    setTovar(null);
  };

  const renderProducts = () => {
    return products.map(prod => (
      <Product productPress={productPress} prod={prod} key={prod.title} />
    ));
  };

  return (
    <View style={styles.cont}>
      <Header navigation={navigation} />
      <Text style={styles.title}>Pronađite svoju omiljenu hranu</Text>
      <ScrollView>
        <View style={styles.list}>{renderProducts()}</View>
      </ScrollView>
      {tovar && (
        <OneProduct
          navigation={navigation}
          prod={tovar}
          close={closeOneProduct}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    color: '#FECD31',
    marginLeft: 20,
    marginTop: 15,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default StoreScreen;
