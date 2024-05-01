// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Icon, MD3Colors } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

// Screens
import Gallery from './screens/Gallery';
import Home from './screens/Home';
import Settings from './screens/Settings';
import SignIn from './screens/auth/SignIn';

// Icons for Bottom Tab Navigation
const homeIcon = ({color}) => (
  <Icon name="home-variant-outline" size={20} color={color} />
  // <Icon source="camera" color={MD3Colors.error50} size={20} />
);
const galleryIcon = ({color}) => (
  <Icon name="view-grid" size={20} color={color} />
  // <Icon source="camera" color={MD3Colors.error50} size={20} />
);
const settingsIcon = ({color}) => (
  <Icon name="view-grid" size={20} color={color} />
  // <Icon source="camera" color={MD3Colors.error50} size={20} />
);



export default function Navigator() {
  const user= {
    access_token: false
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      {!user.access_token ? (
          <OutsideStack />
        ) : (
          <Tab.Navigator barStyle={{backgroundColor: '#f2f0e0'}}>
            <Tab.Screen
              name="Dashboard"
              component={Home}
              options={{
                tabBarIcon: homeIcon,
              }}
            />
            <Tab.Screen
              name="Gallery"
              component={Gallery}
              options={{
                tabBarIcon: galleryIcon,
              }}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{
                tabBarIcon: settingsIcon,
              }}
            />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function OutsideStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}
