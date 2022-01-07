import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/LoggedIn/Home';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={HomeScreen}>
                <Stack.Screen
                    name="Home Screen"
                    component={HomeScreen}
                    options={{ header: () => null }}
                />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
