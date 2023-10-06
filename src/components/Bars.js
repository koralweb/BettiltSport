import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRoute} from '@react-navigation/native';

const Bars = ({navigation, setBars}) => {
  const scr = useState(useRoute().name)[0];
  return (
    <View style={styles.cont}>
      {scr !== 'Home' && (
        <TouchableOpacity onPress={() => setBars(false)} style={styles.wrp}>
          <FontAwesomeIcon color={'white'} size={30} icon={'close'} />
        </TouchableOpacity>
      )}
      <Image style={styles.image} source={require('../images/logo.png')} />
      <Image style={styles.zbig} source={require('../images/zbig1.png')} />
      <Image style={styles.z2} source={require('../images/z2.png')} />
      <View style={styles.item}>
        <TouchableOpacity onPress={() => navigation.push('Home')}>
          <Text style={styles.text}>Dom</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Store')}>
          <Text style={styles.text}>Dućan</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.push('Order')}>
          <Text style={styles.text}>Rezervacija</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Broadcasts')}>
          <Text style={styles.text}>Emisije</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Kontact')}>
          <Text style={styles.text}>Kontakti</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Korzina')}>
          <FontAwesomeIcon
            style={styles.basket}
            color={'white'}
            size={50}
            icon={'shopping-cart'}
          />
        </TouchableOpacity>
      </View>
      <Image style={styles.z3} source={require('../images/z3.png')} />
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
    zIndex: 100,
  },
  wrp: {
    top: 40,
    left: 10,
    zIndex: 1000,
  },
  image: {
    width: 870 / 3,
    height: 113 / 3,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 'auto',
    zIndex: 0,
  },
  zbig: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 603 / 3,
    height: 707 / 3,
    zIndex: 2,
  },
  z2: {
    top: -20,
    width: 377 / 3,
    height: 645 / 3,
    zIndex: 2,
  },
  z3: {
    width: 479 / 3,
    height: 415 / 3,
    zIndex: 2,
    bottom: 0,
  },
  item: {
    alignSelf: 'center',
    marginBottom: 'auto',
    width: '90%',
    zIndex: 0,
  },
  text: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#252525',
    marginBottom: 15,
    textAlign: 'center',
    padding: 15,
    borderRadius: 15,
  },
  basket: {
    alignSelf: 'center',
    marginTop: 30,
  },
});

export default Bars;
