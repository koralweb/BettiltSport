import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import BasketProduct from '../components/BasketProduct';
import product from '../mobx/product';
import EmptyBasket from '../components/EmptyBasket';
import {observer} from 'mobx-react-lite';

const KorzinaScreen = ({navigation}) => {
  const itemProducts = () => {
    return product.list
      .filter(el => el.added)

      .map(prod => {
        return <BasketProduct key={prod.title} prod={prod} />;
      });
  };
  const all = () => {
    const addArr = product.list.filter(el => el.added);
    let all = 0;
    addArr.forEach(product => {
      all = product.count * product.price + all;
    });
    return all;
  };

  return (
    <>
      <View style={styles.cont}>
        <View style={styles.logo}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.icon}>
            <FontAwesomeIcon icon={'angle-left'} size={30} color={'#FECD31'} />
          </TouchableOpacity>
        </View>

        {product.list.some(el => el.added) ? (
          <>
            <Text style={styles.title}>Košarica</Text>

            <ScrollView style={styles.scroll}>{itemProducts()}</ScrollView>

            <View style={styles.wrp}>
              <View style={styles.fullPrice}>
                <Text style={styles.summa}>Cijena narudžbe</Text>
                <Text style={styles.summa}>{all()}€</Text>
              </View>
              <TouchableOpacity
                style={styles.butten}
                onPress={() => navigation.push('Order', {cart: true})}>
                <Text style={styles.btn}>Provjeri</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <EmptyBasket navigation={navigation} />
        )}
      </View>
    </>
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
    marginTop: 40,
    marginBottom: 30,
  },
  icon: {
    top: 30,
    left: 10,
  },
  scroll: {
    alignSelf: 'center',
  },
  wrp: {
    marginTop: 'auto',
    marginBottom: 30,
    backgroundColor: '#FECD31',
    width: '80%',
    height: 150,
    alignSelf: 'center',
    borderRadius: 15,
  },
  fullPrice: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  summa: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    marginBottom: 20,
  },
  butten: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    width: '90%',
    height: 50,
    borderRadius: 15,
  },
  btn: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FECD31',
    textAlign: 'center',
    paddingTop: 10,
  },
});

export default observer(KorzinaScreen);
