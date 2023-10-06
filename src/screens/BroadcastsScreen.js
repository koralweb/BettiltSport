import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import translation from '../data/translation';

const BroadcastsScreen = ({navigation}) => {
  const Item = () => {
    return translation
      .filter(el => el.date >= new Date().getDate())
      .map(item => (
        <View style={styles.list}>
          <View style={styles.inner}>
            <Text style={styles.liga}>{item.liga}</Text>
          </View>
          <View>
            <Text style={styles.time}>
              {item.date}.08.23 - {item.time}
            </Text>
          </View>

          <View>
            <Text style={styles.comand_1}>{item.team1}</Text>
            <View style={styles.solid} />
            <Text style={styles.comand_2}>{item.team2}</Text>
          </View>
        </View>
      ));
  };

  return (
    <View style={styles.cont}>
      <Header navigation={navigation} />
      <Text style={styles.title}>Sportski prijenosi</Text>
      <ScrollView>
        <View key={Math.random()}>{Item()}</View>
      </ScrollView>
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
    marginBottom: 20,
  },
  list: {
    width: '80%',
    height: 150,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#252525',
    marginBottom: 15,
  },
  inner: {
    width: '70%',
    flexDirection: 'row',
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  liga: {
    color: '#FECD31',
    fontSize: 17,
  },
  comand_1: {
    color: 'white',
    fontSize: 17,
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  comand_2: {
    color: 'white',
    fontSize: 17,
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  time: {
    color: '#FECD31',
    fontSize: 17,
    paddingLeft: 25,
  },
  solid: {
    height: 2,
    backgroundColor: 'black',
    width: '80%',
    alignSelf: 'center',
  },
});

export default BroadcastsScreen;
