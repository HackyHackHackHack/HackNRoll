import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './screens/loggedout/SignUp';
import LoginScreen from './screens/loggedout/Login';
import HomeScreen from './screens/loggedin/HomeScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value === null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        });
    }, []);

    if (isFirstLaunch === null) {
        return null;
    } else if (isFirstLaunch === true) {
        routeName = 'Signup';
    } else {
        routeName = 'Login ';
    }

    return (
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen
                name="Login  askdalsd"
                component={LoginScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
