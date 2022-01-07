import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sendTelegramMessage } from './sendMessage';


const Stack = createStackNavigator();


export default function App() {
    const [text, setText] = React.useState(''); 

    return (
        <SafeAreaView>
            <TextInput style ={styles.input} value={text} multiline={true} onChangeText={setText}/>
            <Button
              title="WUPHF"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
              onPress={() => sendTelegramMessage("leapingfire", text)}
              style={styles.button}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
      top: 50,
      height: 200,
      borderWidth: 1,
      padding: 10,
      marginHorizontal:12,
      marginBottom: 50
    },
  });
