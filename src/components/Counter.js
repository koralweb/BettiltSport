import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Counter = () => {
  const [cnt, setCnt] = useState(1);

  const inc = () => {
    setCnt(cnt + 1);
  };

  const dec = () => {
    if (cnt === 1) {
      return;
    }
    setCnt(cnt - 1);
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={dec}>
        <Text style={styles.min}>-</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{cnt}</Text>
      <TouchableOpacity onPress={inc}>
        <Text style={styles.pl}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    width: 90,
    justifyContent: 'center',
  },
  text: {
    fontSize: 21,
    fontWeight: '600',
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },
  min: {
    fontSize: 21,
    fontWeight: '600',
    paddingLeft: 9,
    paddingRight: 9,
    color: '#FECD31',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FECD31',
  },
  pl: {
    fontSize: 21,
    fontWeight: '600',
    color: 'white',
    paddingLeft: 9,
    paddingRight: 9,
    backgroundColor: '#FECD31',
    borderRadius: 10,
  },
});

export default Counter;
