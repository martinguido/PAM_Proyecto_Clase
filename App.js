import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Screen3 from './components/Screen3.js';
import Screen4 from './components/Screen4.js';
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Screen3">
        <Drawer.Screen name="Screen3" component={Screen3} />
        <Drawer.Screen name="Screen4" component={Screen4} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
