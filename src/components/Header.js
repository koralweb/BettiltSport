import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Bars from './Bars';
import {useRoute} from '@react-navigation/native';

const Header = ({navigation}) => {
  const [bars, setBars] = useState(useRoute().name === 'Home');
  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={() => setBars(true)}>
        <FontAwesomeIcon color={'#FECD31'} size={30} icon={'bars'} />
      </TouchableOpacity>

      {bars && <Bars navigation={navigation} setBars={setBars} />}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    position: 'relative',
    zIndex: 2,
    paddingTop: 40,
    paddingLeft: 10,
  },
});

export default Header;
