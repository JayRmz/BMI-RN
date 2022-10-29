import React from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
export default function AddBMI() {
  return (
    <ImageBackground
      source={require('../assets/bg-2.png')}
      resizeMode="cover"
      style={styles.image}>
      <ScrollView style={styles.screenContainer}>
        <Text style={styles.title}>Calcular IMC </Text>
        <View style={styles.inputsSection}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Estatura (cm)</Text>
            <TextInput
              style={styles.input}
              placeholder="Estatura en cm"
              maxLength={3}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Peso (kg)</Text>
            <TextInput
              style={styles.input}
              placeholder="Peso en kg"
              maxLength={7}
            />
          </View>
        </View>
        <View>
          <Pressable
            style={({pressed}) => [
              styles.button,
              pressed ? styles.buttonPressed : null,
            ]}>
            <Text style={styles.buttonText}>Calcular</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  screenContainer: {
    padding: 10,
    margin: 15,
    backgroundColor: 'rgba( 255, 255, 255, 0.25 )',
    shadowColor: '#1F2687',
    shadowOpacity: 0.37,
    shadowOffset: {width: 0, height: 8},
    shadowRadius: 32,
    elevation: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'solid',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputsSection: {
    flex: 1,
    padding: 15,
  },
  inputContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'solid',
    padding: 5,
    height: 40,
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: '#fcfcfc',
    flex: 1,
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'solid',
    height: 40,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    padding: 5,
    margin: 5,
    color: '#0000ff',
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
