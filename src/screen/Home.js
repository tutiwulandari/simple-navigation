import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{marginTop: 20, justifyContent: 'center'}}>
        <Text style={{fontSize: 28, textAlign: 'center'}}>
          This is My Home
        </Text>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 20,
          borderRadius: 10,
          elevation: 10,
          paddingHorizontal: 10,
          paddingVertical: 10,
          backgroundColor: 'deepskyblue',
        }}
        onPress={() => navigation.navigate('AnotherScreen')}
       >
        <Text style={{fontSize: 24}}> PINDAH</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
