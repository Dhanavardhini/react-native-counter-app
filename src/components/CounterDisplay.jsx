import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/styles';

export default function CounterDisplay({ count }) {
  return (
    <View>
      <Text style={styles.title}>🔢 Counter App</Text>
      <Text style={styles.counter}>{count}</Text>
    </View>
  );
}
