import React from "react";
import { StyleSheet } from "react-native";
import Auth from "./src/screens/Auth";

export default function App() {
  return <Auth />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
