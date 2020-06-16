import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Drinks } from '../Screens/Drinks';
import { Filters } from '../Screens/Filters';

const Stack = createBottomTabNavigator({
  Drinks: {
    screen: Drinks,
    navigationOptions: {
      title: 'Напитки',
    }
  },
  Filters: {
    screen: Filters,
    navigationOptions: {
      title: 'Фильтры',
    }
  }
})

export default createAppContainer(Stack)