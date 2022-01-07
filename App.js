import { StyleSheet, TextInput, Text, Button, Keyboard } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sendMessage } from './sendMessage';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const SETUP_INSTRUCTIONS = 'Welcome to MEOW!\nTo Start, follow the link below to authenticate this CallMeBot on Telegram to allow your phone to receive calls and telegram texts\nOnce done, come back here and click on Proceed!';

export default function App() {
    const [text, setText] = React.useState(''); 
    const [username, setUsername] = React.useState(''); 

    const openAuthSiteInBrowser = () => WebBrowser.openBrowserAsync('https://api2.callmebot.com/txt/login.php');

    const meow = () => {
      return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
                <Text style={style.subtitle}>Telegram username of recipient</Text>
                <TextInput
                style={styles.message}
                textAlignVertical='top'
                placeholder='@username'
                value={username}
                onChangeText={setUsername}
                />
                <Text style={style.subtitle}>Message to MEOW</Text>
                <TextInput
                style ={styles.message}
                value={text}
                multiline={true}
                onChangeText={setText}
                placeholder='Message'
                />
                <Button
                  title="MEOW"
                  color="#841584"
                  onPress={() => sendMessage(username, text)}
                />
      </SafeAreaView>
      </TouchableWithoutFeedback>);
    };
    
    const setup = (props) => {
      return (
      <ScrollView style={{flex: 1}}>
            <View style={{marginTop: '2%', marginBottom: '2%'}}>
                <Text>{SETUP_INSTRUCTIONS}</Text>
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

const styles = StyleSheet.create({
    message: {
      height: '20%',
      padding: '3%',
      marginHorizontal: '2%',
      marginBottom: '5%'
    },
    subtitle: {
      fontSize: 24,
      fontWeight: 'bold',
      alignSelf:"flex-start",
      textAlign: 'left',
      marginLeft: '5%',
      marginBottom: '5%'
    }
  });
