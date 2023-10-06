import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';

const KontactScreen = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <Header navigation={navigation} />
      <Text style={styles.title}>Kontakti</Text>
      <Text style={styles.text}>Ul. Radoslava Cimermana 74, Zagreb</Text>
      <Text style={styles.text}>+385 1 4566 634</Text>
      <Text style={styles.text}>Ulaz sa parkinga</Text>
      <Image style={styles.z3} source={require('../images/z3.png')} />
      <Image style={styles.image} source={require('../images/logo.png')} />
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
    marginTop: 20,
  },
  text: {
    width: '90%',
    height: 60,
    backgroundColor: '#252525',
    marginBottom: 10,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 20,
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    paddingTop: 15,
  },
  image: {
    width: 870 / 3,
    height: 113 / 3,
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 50,
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

export default KontactScreen;
