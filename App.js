import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Fish is watching. Fish is observing. Fish knows.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0,25,50)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: 'rgb(250,250,250)'
  }
});
