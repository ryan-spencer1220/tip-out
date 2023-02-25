import { useState } from "react";
import { supabase } from "../config/supabaseConfig";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.content}>
          <View style={styles.row}>
            <View style={styles.largeCard}></View>
          </View>
          <View style={styles.row}>
            <View style={styles.smallCard}>
              <Button
                title="Sign Out"
                onPress={() => {
                  supabase.auth.signOut();
                }}
              />
            </View>
            <View style={styles.smallCard}></View>
          </View>
          <View style={styles.row}>
            <View style={styles.smallCard}></View>
            <View style={styles.smallCard}></View>
          </View>
          <Text style={styles.largeText}>What Your Tracking</Text>
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
    flex: 2,
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
  smallCard: {
    flex: 1,
    width: "45%",
    aspectRatio: 1 / 1,
    position: "relative",
    backgroundColor: "#1c1c1c",
    borderRadius: 20,
    margin: 10,
    justifyContent: "center",
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
