import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { HomeScreen } from './screens/home.screen';
import { LoginScreen } from './screens/login.screen';
import { RegisterScreen } from './screens/register.screen';
import { SearchScreen } from './screens/search.screen';
import { ListScreen } from './screens/list.screen';
import { DetailScreen } from './screens/detail.screen';
import { MessageListScreen } from './screens/message-list.screen';
import { MessageDetail } from './screens/message-detail.screen';
import { AddScreen } from './screens/add.screen';
import { isSignedIn } from './settings';

const Drawer = createDrawerNavigator();

const App = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await isSignedIn();
      setLogged(result);
    };

    fetchData();
  }, []);


  function CustomDrawerContent(props) {
  
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {
          logged ? (
            <DrawerItem label="Logout" onPress={async () => {
              AsyncStorage.clear()
              setLogged(false);
              console.log('wylogowano');
              }} />
          ) : (
            <DrawerItem label=''/>
          )
        }
      </DrawerContentScrollView>
    );
  }

  
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />}>
        {/* https://reactnavigation.org/docs/auth-flow/ */}
        {
          logged ? (
            <>
              <Drawer.Screen name="MessageListScreen" component={MessageListScreen} />
              <Drawer.Screen name="ListScreen" component={ListScreen} />
              <Drawer.Screen name="DetailScreen" component={DetailScreen} />
              <Drawer.Screen name="MessageDetail" component={MessageDetail} />
              <Drawer.Screen name="AddScreen" component={AddScreen} />

            </>
          ) : (
              <>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Login" component={LoginScreen} options={{ icon: 'home' }}/>
                <Drawer.Screen name="Register" component={RegisterScreen} />
              </>
            )
        }
        <Drawer.Screen name="Search" component={SearchScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default App;
