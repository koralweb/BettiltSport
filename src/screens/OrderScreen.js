import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import Congrats from '../components/Congrats';

const OrderScreen = ({route, navigation}) => {
  const [order, setOrder] = useState(false);
  return (
    <View style={styles.cont}>
      <Header navigation={navigation} />

      <Text style={styles.title}>
        {route.params ? 'Naručiti' : 'Rezervacije stolova'}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Ime"
        placeholderTextColor={'white'}
      />
      <TextInput
        style={styles.input}
        placeholder="Prezime"
        placeholderTextColor={'white'}
      />
      <TextInput
        style={styles.input}
        placeholder="Broj mobitela"
        placeholderTextColor={'white'}
      />
      {!route.params && (
        <TextInput
          style={styles.input}
          placeholder="Broj"
          placeholderTextColor={'white'}
        />
      )}

      <TouchableOpacity style={styles.butten} onPress={() => setOrder(true)}>
        <Text style={styles.btnText}>
          {route.params ? 'Oblikovati' : 'Knjiga'}
        </Text>
      </TouchableOpacity>
      {order && <Congrats navigation={navigation} setOrder={setOrder} />}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    position: 'relative',
    zIndex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'black',
  },
  wrp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  basket: {
    top: 40,
    right: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    color: '#FECD31',
    marginLeft: 20,
    marginTop: 20,
  },
  input: {
    width: '90%',
    height: 60,
    backgroundColor: '#252525',
    marginBottom: 10,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 20,
    color: '#fff',
  },
  butten: {
    width: '40%',
    height: 50,
    backgroundColor: '#FECD31',
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 10,
    color: 'white',
  },
});

export default OrderScreen;
