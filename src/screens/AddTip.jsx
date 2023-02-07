import { useState } from "react";
import { supabase } from "../config/supabaseConfig";
import React from "react";
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AddTip = ({ navigation }) => {
  const [cashTips, setCashTips] = useState(0);
  const [creditTips, setCreditTips] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.content}>
      <View style={styles.card}>
        <View style={styles.container}>
          <View style={styles.outline}>
            <Text style={styles.textLeft}>Cash Tips</Text>
            <TextInput
              label="Enter Amount"
              value={cashTips}
              onChangeText={(cash) => setCashTips(cash)}
              style={styles.item}
              placeholder="Enter Amount"
              placeholderTextColor="#484848"
              keyboardType="number-pad"
            />
            <Text style={styles.textLeft}>Credit Tips</Text>
            <TextInput
              label="Enter Amount"
              value={creditTips}
              onChangeText={(credit) => setCreditTips(credit)}
              style={styles.item}
              placeholder="Enter Amount"
              placeholderTextColor="#484848"
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.outline}>
            <Text style={styles.textLeft}>Job</Text>
            <TextInput
              label="Enter Amount"
              value={cashTips}
              onChangeText={(cash) => setCashTips(cash)}
              style={styles.item}
              placeholder="Enter Amount"
              placeholderTextColor="#484848"
              keyboardType="number-pad"
            />
            <Text style={styles.textLeft}>Hours</Text>
            <TextInput
              label="Enter Amount"
              value={creditTips}
              onChangeText={(credit) => setCreditTips(credit)}
              style={styles.item}
              placeholder="Enter Amount"
              placeholderTextColor="#484848"
              keyboardType="number-pad"
            />
          </View>
        </View>
        <Text style={styles.textLeft}>Notes</Text>
        <TextInput
          label="Enter Amount"
          value={creditTips}
          onChangeText={(credit) => setCreditTips(credit)}
          style={styles.item}
          placeholder="Enter Amount"
          placeholderTextColor="#484848"
          keyboardType="number-pad"
          numberOfLines={4}
        />
        <TouchableOpacity
          style={styles.submitButton}
          underlayColor="#fff"
          disabled={loading}
          onPress={() => signInWithEmail()}
        >
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
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
  container: {
    marginTop: 20,
    marginBottom: 20,
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
  textDark: {
    color: "#707070",
  },
  headline: {
    fontSize: 30,
    paddingBottom: 20,
    color: "#EDEDED",
  },
  outline: {
    borderColor: "#3c3c3c",
    borderRadius: 10,
    padding: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: "100%",
  },
  or: {
    color: "white",
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },
  item: {
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
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: "#2b825b",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#2E2E2E",
    fontSize: 16,
  },
  borderButton: {
    marginTop: 10,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#3c3c3c",
  },
  solidButton: {
    marginTop: 10,
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: "#2E2E2E",
    borderRadius: 5,
    borderWidth: 1,
  },
  forgotPassword: {
    margin: 38,
  },
});

export default AddTip;
