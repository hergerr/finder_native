import 'react-native-gesture-handler';
import React, { useContext, useEffect, useReducer, useMemo } from 'react';
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
import { isSignedIn, AuthContext } from './settings';

const Drawer = createDrawerNavigator();

const App = () => {
  // https://reactnavigation.org/docs/auth-flow/
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'LOG_IN':
          return {
            ...prevState,
            logged: true,
          };
        case 'LOG_OUT':
          return {
            ...prevState,
            logged: false,
          };
      }
    },
    {
      isSigned: false,
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await isSignedIn();
      if (result) {
        dispatch({ type: 'LOG_IN', logged: true });
      } else {
        dispatch({ type: 'LOG_OUT', logged: false });
      }
    };

    fetchData();
  }, []);


  const authContext = useMemo(
    () => ({
      logIn: async data => {
        dispatch({ type: 'LOG_IN' });
        await AsyncStorage.setItem('access', data);
      },
      logOut: async () => {
        dispatch({ type: 'LOG_OUT' });
        await AsyncStorage.clear();
      }
    }), [])


  // adding logout option to drawer menu
  function CustomDrawerContent(props) {

    const { logOut } = useContext(AuthContext);

    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {
          state.logged ? (
            <DrawerItem label="Logout" onPress={async () => {
              logOut();
              console.log('wylogowano');
            }} />
          ) : (
              <DrawerItem label='' />
            )
        }
      </DrawerContentScrollView>
    );
  }


  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />}>
          {/* https://reactnavigation.org/docs/auth-flow/ */}
          {
            state.logged ? (
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
                  <Drawer.Screen name="Login" component={LoginScreen} options={{ icon: 'home' }} />
                  <Drawer.Screen name="Register" component={RegisterScreen} />
                </>
              )
          }
          <Drawer.Screen name="Search" component={SearchScreen} />

        </Drawer.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
};


export default App;
export { AuthContext }