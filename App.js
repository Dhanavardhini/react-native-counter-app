import React, { useState } from 'react';
import CounterDisplay from './src/components/CounterDisplay';
import CounterButtons from './src/components/CounterButtons';
import styles from './src/styles/styles';
import { View } from 'react-native';


export default function App() {
  const [count, setCount] = useState(0); 

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
   const reset = () => setCount(0);

  return (
    <View style={styles.container}>
      <CounterDisplay count={count} />
      <CounterButtons onIncrement={increment} onDecrement={decrement}  onReset={reset}/>
    </View>
  );
}
