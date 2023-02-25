import { useState } from "react";
import { supabase } from "../config/supabaseConfig";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Settings = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.content}>
          <View style={styles.row}>
            <View style={styles.largeCard}></View>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.smallCard}
              onPress={() => {
                supabase.auth.signOut();
              }}
            >
              <Entypo name="log-out" size={40} color="#2b825b" />
              <Text style={styles.largeText}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.smallCard}
              onPress={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <Ionicons name="moon" size={40} color="#2b825b" />
              ) : (
                <Ionicons name="ios-sunny" size={40} color="#2b825b" />
              )}
              <Text style={styles.largeText}>
                {darkMode ? "Dark Mode" : "Light Mode"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.smallCard}>
              <FontAwesome name="bell" size={40} color="#2b825b" />
              <Text style={styles.largeText}>Reminders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.smallCard}>
              <FontAwesome5 name="file-export" size={40} color="#2b825b" />
              <Text style={styles.largeText}>Export Data</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.largeText}>Analytics Settings</Text>
          <TouchableOpacity style={styles.settingsRow}>
            <Text style={styles.smallText}>Cash & Credit Tips</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsRow}></TouchableOpacity>
          <TouchableOpacity style={styles.settingsRow}></TouchableOpacity>
          <TouchableOpacity style={styles.settingsRow}></TouchableOpacity>
          <Text style={styles.largeText}>App Settings</Text>
          <Text style={styles.largeText}>Terms & Agreements</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    alignItems: "stretch",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1c1c1c",
  },
  content: {
    alignItems: "stretch",
    backgroundColor: "#282828",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
  },
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
  },
  settingsRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "#1c1c1c",
    borderRadius: 10,
  },
  smallCard: {
    flex: 1,
    width: "45%",
    aspectRatio: 1 / 1,
    position: "relative",
    backgroundColor: "#1c1c1c",
    borderRadius: 20,
    margin: 10,
    justifyContent: "center",
    paddingStart: 20,
  },
  largeCard: {
    width: "95%",
    aspectRatio: 2 / 1,
    position: "relative",
    backgroundColor: "#1c1c1c",
    borderRadius: 20,
    margin: 10,
  },
  largeText: {
    color: "#EDEDED",
    fontSize: 24,
    fontFamily: "Inter_800ExtraBold",
  },
  mediumText: {
    color: "#EDEDED",
    fontSize: 18,
    fontFamily: "Inter_800ExtraBold",
  },
  smallText: {
    color: "gray",
    fontFamily: "Inter_800ExtraBold",
  },
  textDark: {
    color: "#707070",
  },
  headline: {
    fontSize: 80,
    color: "#EDEDED",
  },
  line: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    margin: 10,
  },
  or: {
    color: "white",
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
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
});

export default Settings;
