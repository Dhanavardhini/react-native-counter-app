import React from 'react';
import { View, Button } from 'react-native';
import styles from '../styles/styles';

export default function CounterButtons({ onIncrement, onDecrement, onReset }) {
  return (
    <View style={styles.buttonContainer}>
      <Button title="−" onPress={onDecrement} />
      <View style={styles.spacer} />
      <Button title="+" onPress={onIncrement} />
      <View style={styles.spacer} />
      <Button title="Reset" onPress={onReset} color="#ff6347" />
    </View>
  );
}

