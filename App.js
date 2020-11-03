import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeScreen } from './screens/home.screen';
import { LoginScreen } from './screens/login.screen';
import { RegisterScreen } from './screens/register.screen';
import { SearchScreen } from './screens/search.screen';
import { ListScreen } from './screens/list.screen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Register" component={RegisterScreen} />
        <Drawer.Screen name="Search" component={SearchScreen} />

        {/* temporary */}
        <Drawer.Screen name="ListScreen" component={ListScreen} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default App;
