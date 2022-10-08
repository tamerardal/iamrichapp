import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button title='I Am Rich' onPress={()=>navigation.navigate('IAmRichScreen')} style={styles.buttonStyle}/>
      <Button title='I Am Poor' onPress={()=>navigation.navigate('IAmPoorScreen')} style={styles.buttonStyle}/>
    </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  container: {
    marginTop: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  buttonStyle: {
    flex:1,
  }
});

export default HomeScreen;
