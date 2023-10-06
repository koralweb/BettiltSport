import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import product from '../mobx/product';

const OneProduct = ({prod, navigation}) => {
  const [press, setPress] = useState(prod.added);

  const addProduct = () => {
    setPress(true);
    product.addProduct(prod.id, 1);
  };

  return (
    <View style={styles.cont}>
      <Image source={prod.image} style={styles.image} />
      {press ? (
        <TouchableOpacity
          style={styles.buttenBasket}
          onPress={() => navigation.push('Korzina')}>
          <Text style={styles.btnText}>Dodano u narudžbu!</Text>
        </TouchableOpacity>
      ) : (
        <View style={{flex: 1}}>
          <View style={styles.prod}>
            <Text style={styles.title}>{prod.title}</Text>
            <Text style={styles.price}>{prod.price}€</Text>
            <Text style={styles.desc}>{prod.desc}</Text>
          </View>

          <TouchableOpacity onPress={addProduct} style={styles.butten}>
            <Text style={styles.btnText}>Dodaj u košaricu</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#000',
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#FECD31',
    alignSelf: 'center',
    marginTop: 20,
  },
  price: {
    fontSize: 25,
    fontWeight: '400',
    color: 'white',
    alignSelf: 'center',
    marginTop: 20,
  },
  desc: {
    fontSize: 15,
    fontWeight: '400',
    width: '80%',
    color: 'white',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  butten: {
    width: '40%',
    height: 50,
    backgroundColor: '#FECD31',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    borderRadius: 10,
    marginBottom: 30,
  },
  buttenBasket: {
    width: '60%',
    height: 70,
    backgroundColor: '#FECD31',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
});

export default OneProduct;
