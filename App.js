import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Drinks } from './Screens/Drinks';
import { getListFromServer } from './helpers/api';
import Navigator from './helpers/navigator';

export default function App() {
  const [currentFilter, setCurrentFilter] = useState('Ordinary Drink');
  const [drinks, setDrinks] = useState([]);

  const getNewDrinks = (filter) => {
    getListFromServer(filter)
        .then(data => setDrinks(data.drinks));
  }

  useEffect(() => {
    getNewDrinks(currentFilter);
  }, [currentFilter])

  return (
    <View style={styles.container}>
      {
        drinks.length > 0
        && <Navigator list={drinks}/>
      }
      {/*<Navigator list={drinks}/>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
