import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";

const Auth = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.content}>
      <Text variant="displayLarge" style={styles.headline}>
        Tipster
      </Text>
      <TextInput
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.item}
      />
      <TextInput
        label="Password"
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.item}
      />
      <Button mode="contained" onPress={() => console.log("Pressed")}>
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  content: {
    alignItems: "stretch",
    flex: 1,
    justifyContent: "center",
    margin: 40,
  },
  form: {},
  // headline: {
  //   flex: 3,
  //   alignContent: "center",
  // },
  item: {
    margin: 10,
  },
});

export default Auth;
