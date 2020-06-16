import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

export const Drinks = ({ navigation }) => {
  console.log(navigation.getParam())
  return (
    <>
      <View style={styles.drinksHeader}>
        <Text style={styles.drinksHeaderText}>Drinks</Text>
      </View>
      <ScrollView style={styles.list}>
        {
          navigation.list.map( (item) => (
            <View key={item.idDrink} style={styles.listItem}>
              <Image
                  style={styles.image}
                  source={{
                    uri: item.strDrinkThumb,
                  }}
              />
              <Text style={styles.text}>{item.strDrink}</Text>
            </View>
          ))
        }
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#7E7E7E',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  list: {
    padding: 20,
  },
  listItem: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 21,
  },
  drinksHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 70,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    marginBottom: 20,
  },
  drinksHeaderText: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 24,
    color: '#000',
    marginLeft: 30,
  },
});