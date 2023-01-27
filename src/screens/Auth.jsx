import { useState } from "react";
import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

const Auth = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.content}>
      <View style={styles.card}>
        <Text style={styles.textLeft}>Tipster</Text>
        <Text style={styles.textLeft}>Sign in to your account</Text>
        <TouchableOpacity style={styles.solidButton} underlayColor="#fff">
          <Text style={styles.text}>Connect with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.borderButton} underlayColor="#fff">
          <Text style={styles.text}>Connect with Apple</Text>
        </TouchableOpacity>
        <Text style={styles.textLeft}>Email</Text>
        <TextInput
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
          style={styles.item}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.text}>Password</Text>
          <Text style={styles.text}>Forgot Password?</Text>
        </View>
        <TextInput
          label="Password"
          value={text}
          onChangeText={(text) => setPassword(text)}
          style={styles.item}
        />
        <TouchableOpacity style={styles.submitButton} underlayColor="#fff">
          <Text style={styles.text}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Don't have an account? Sign Up Now</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: "stretch",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1C1C1C",
  },
  card: {
    margin: 40,
  },
  text: {
    color: "#EDEDED",
    textAlign: "center",
  },
  textLeft: {
    color: "#EDEDED",
  },
  item: {
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    padding: 10,
    backgroundColor: "#222222",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#3c3c3c",
    color: "white",
  },
  submitButton: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#2b825b",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#2E2E2E",
  },
  borderButton: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#3c3c3c",
  },
  solidButton: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#2E2E2E",
    borderRadius: 5,
    borderWidth: 1,
  },
});

export default Auth;
