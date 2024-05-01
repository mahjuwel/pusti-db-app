import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Logo from './components/Logo';
import { useAuth } from './hooks/AuthProvider';
import Dashboard from './screens/Dashboard';
import Logout from './screens/Logout';
import TraceRoute from './screens/TraceRoute';
import SignIn from './screens/auth/SignIn';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function NavigationDrawer() {

  const {user} = useAuth();

  // const user= {
  //   access_token: true
  // }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {!user.access_token ? (
          <OutsideStack />
        ) : (
          <Drawer.Navigator initialRouteName="Dashboard">
            <Drawer.Screen
              name="Dashboard"
              component={Dashboard}
              options={{
                // title: 'Dashboard',
                // headerRight: () => <Logo />,
                headerTitle: () => <Logo />,
              }}
            />

            <Drawer.Screen
              name="TraceRoute"
              component={TraceRoute}
              options={{
                // title: 'TraceRoute',
                // headerRight: () => <Logo />,
                headerTitle: () => <Logo />,
              }}
            />

            <Drawer.Screen name="Logout" component={Logout} />

            {/* 
           <Drawer.Screen name="Home" component={Home} />
           
            <Drawer.Screen name="Gallery" component={Gallery} />
            <Drawer.Screen name="Settings" component={Settings} /> */}
          </Drawer.Navigator>
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
