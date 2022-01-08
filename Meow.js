import React from 'react';
import { Text, TextInput, Button, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { sendMessage } from './sendMessage';
import { styles } from './styles';

export const meow = () => {
    const [text, setText] = React.useState(''); 
    const [username, setUsername] = React.useState(''); 

    return (
      <SafeAreaView>
              <Text style={styles.subtitle}>Telegram username of recipient</Text>
              <TextInput
              style={styles.username}
              onSubmitEditing={Keyboard.dismiss}
              textAlignVertical='top'
              placeholder='@username'
              value={username}
              onChangeText={setUsername}
              />
              <Text style={styles.subtitle}>Message to MEOW</Text>
              <TextInput
              style={styles.message}
              value={text}
              multiline={true}
              onChangeText={setText}
              placeholder='Message'
              />
              <Button
                title="MEOW"
                color="#841584"
                onPress={() => {
                  sendMessage(username, text);
                  // Keyboard.dismiss();
                  }}
              />
    </SafeAreaView>);
  };