import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Header from '../components/Header';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <Header navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {},
});

export default HomeScreen;
