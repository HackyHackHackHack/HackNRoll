import { StyleSheet, View, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';



const Stack = createStackNavigator();


export default function App() {
    const [text, setText] = React.useState(''); 

    return (
        <SafeAreaView>
            <TextInput
                value={text}
                onChangeText={text => setText(text)}
            />
        </SafeAreaView>
            
        
        
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
