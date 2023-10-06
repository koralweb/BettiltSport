import React, {useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import product from '../mobx/product';

const Congrats = ({navigation}) => {
  useEffect(() => {
    product.removeProducts();
  }, []);

  return (
    <View style={styles.cont}>
      <Text style={styles.title}>Vaša narudžba je uspješno snimljena!</Text>
      <TouchableOpacity
        style={styles.butten}
        onPress={() => navigation.push('Home')}>
        <Text style={styles.btn}>Dom</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,
  },
  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  butten: {
    backgroundColor: '#FECD31',
    width: '50%',
    alignSelf: 'center',
    height: 50,
    borderRadius: 15,
    marginTop: 50,
  },
  btn: {
    textAlign: 'center',
    paddingTop: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Congrats;
