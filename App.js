import { View, Text, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { meow } from './Meow';
import { styles } from './styles';

const Stack = createStackNavigator();

const SETUP_INSTRUCTIONS_1 = 'Welcome to MEOW!';
const SETUP_INSTRUCTIONS_2 = '\nTo Start, follow the link below to authenticate this\nCallMeBot on Telegram to allow your phone to receive calls and telegram texts\n\nOnce done, come back here and click on Proceed!';

export default function App() {
    

    const openAuthSiteInBrowser = () => WebBrowser.openBrowserAsync('https://api2.callmebot.com/txt/login.php');

    const setup = (props) => {
      return (
      <ScrollView style={{flex: 1, marginTop:'20%'}}>
            <View style={{marginTop: '2%', marginBottom: '2%'}}>
                <Text style={styles.subtitle}>{SETUP_INSTRUCTIONS_1}</Text>
                <Text style={styles.subsubtitle}>{SETUP_INSTRUCTIONS_2}</Text>
                <Button title="Authenticate" color="#841584" onPress={openAuthSiteInBrowser} />
            </View>
            <Button
                  title="Proceed"
                  color="#841584"
                  onPress={() => props.navigation.navigate('meow')}
                />
      </ScrollView>);
    };

   //TODO: Contacts Screen

    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="setup" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="setup" component={setup} />
            <Stack.Screen name="meow" component={meow}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
}
