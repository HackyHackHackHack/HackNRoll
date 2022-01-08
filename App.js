import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  Keyboard,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { sendMessage } from "./sendMessage";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Message } from "./sms";

const Stack = createStackNavigator();

const SETUP_INSTRUCTIONS_1 = "Welcome to MEOW!";
const SETUP_INSTRUCTIONS_2 =
  "\nTo Start, follow the link below to authenticate this\nCallMeBot on Telegram to allow your phone to receive calls and telegram texts\n\nOnce done, come back here and click on Proceed!";

export default function App() {
  const [text, setText] = React.useState("");
  const [username, setUsername] = React.useState("");

  const openAuthSiteInBrowser = () =>
    WebBrowser.openBrowserAsync("https://api2.callmebot.com/txt/login.php");

  const meow = () => {
    return (
      <SafeAreaView>
        <Text style={styles.subtitle}>Telegram username of recipient</Text>
        <TextInput
          style={styles.username}
          textAlignVertical="top"
          placeholder="@username"
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.subtitle}>Message to MEOW</Text>
        <TextInput
          style={styles.message}
          value={text}
          multiline={true}
          onChangeText={setText}
          placeholder="Message"
        />
        <Button
          title="MEOW"
          color="#841584"
          onPress={() => {
            sendMessage(username, text);
            Message("81189178", text);
            Keyboard.dismiss();
          }}
        />
      </SafeAreaView>
    );
  };

  const setup = (props) => {
    return (
      <ScrollView style={{ flex: 1, marginTop: "20%" }}>
        <View style={{ marginTop: "2%", marginBottom: "2%" }}>
          <Text style={styles.subtitle}>{SETUP_INSTRUCTIONS_1}</Text>
          <Text style={styles.subsubtitle}>{SETUP_INSTRUCTIONS_2}</Text>
          <Button
            title="Authenticate"
            color="#841584"
            onPress={openAuthSiteInBrowser}
          />
        </View>
        <Button
          title="Proceed"
          color="#841584"
          onPress={() => props.navigation.navigate("meow")}
        />
      </ScrollView>
    );
  };

  //TODO: Contacts Screen

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="setup"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="setup" component={setup} />
          <Stack.Screen name="meow" component={meow} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  message: {
    marginTop: "10%",
    height: "20%",
    padding: "3%",
    marginHorizontal: "2%",
    marginBottom: "5%",
  },
  subtitle: {
    marginTop: "10%",
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "flex-start",
    textAlign: "left",
    marginLeft: "5%",
    marginBottom: "5%",
  },
  subsubtitle: {
    marginTop: "10%",
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-start",
    textAlign: "left",
    marginLeft: "5%",
    marginBottom: "5%",
  },
});
