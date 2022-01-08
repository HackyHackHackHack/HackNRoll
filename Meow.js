import React from 'react';
import { Text, TextInput, Button, Keyboard, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { sendMessage } from './sendMessage';
import { styles } from './styles';

export const meow = () => {
    const [text, setText] = React.useState(''); 
    const [username, setUsername] = React.useState(''); 

    const onPressDone = () => {
        if (sendMessage(username, text)) {
            Alert.alert(`Success! It has been sent to ${username}`);
        }};

    return (
      <SafeAreaView>
            <Text style={styles.subsubtitle}>Note: MEOWS are too powerful for their own good. So you must wait 2 minutes before sending any MEOWs.</Text>
              <Text style={styles.subtitle}>Telegram username of recipient</Text>
              <TextInput
              style={styles.username}
              onSubmitEditing={Keyboard.dismiss}
              textAlignVertical='top'
              placeholder='@username'
              value={username}
              returnKeyType = 'done'
              onChangeText={setUsername}
              />
              <Text style={styles.subtitle}>Message to MEOW</Text>
              <TextInput
              style={styles.message}
              onSubmitEditing={Keyboard.dismiss}
              value={text}
              multiline={true}
              returnKeyType = 'done'
              onChangeText={setText}
              placeholder='Message'
              />
              <Button
                title="MEOW"
                color="#841584"
                onPress={onPressDone}
              />
              
    </SafeAreaView>);
  };