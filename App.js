import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeScreen } from './screens/home.screen';
import { LoginScreen } from './screens/login.screen';
import { RegisterScreen } from './screens/register.screen';
import { SearchScreen } from './screens/search.screen';
import { ListScreen } from './screens/list.screen';
import { DetailScreen } from './screens/detail.screen';
import { MessageListScreen } from './screens/message-list.screen';
import { MessageDetail } from './screens/message-detail.screen';

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
        <Drawer.Screen name="DetailScreen" component={DetailScreen} />
        <Drawer.Screen name="MessageListScreen" component={MessageListScreen} />
        <Drawer.Screen name="MessageDetail" component={MessageDetail} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default App;
