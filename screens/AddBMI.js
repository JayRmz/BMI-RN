import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
export default function AddBMI() {
  return (
    <ImageBackground
      source={require('../assets/bg-2.png')}
      resizeMode="cover"
      style={styles.image}>
      <View>
        <Text>ADD BMI</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
