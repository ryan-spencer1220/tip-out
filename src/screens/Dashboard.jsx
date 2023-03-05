import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { useState, useEffect } from "react";
import { supabase } from "../config/supabaseConfig";

const Dashboard = ({ navigation }) => {
  const [userTips, setUserTips] = useState();

  async function getTips() {
    const tips = await supabase.from("tips").select();
    setUserTips(tips);
    console.log(userTips);
  }

  useEffect(() => {
    getTips();
  }, []);

  return (
    <SafeAreaView style={styles.background}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.content}>
          <View style={styles.row}></View>
          {userTips &&
            userTips.data.map((userTip) => (
              <View style={styles.tipRow}>
                <Text style={styles.smallText}>{userTip.date}</Text>
                <Text style={styles.smallText}>${userTip.credit_tips}</Text>
                <Text style={styles.smallText}>${userTip.cash_tips}</Text>
                <Text style={styles.smallText}>{userTip.job}</Text>
                <Text style={styles.smallText}>{userTip.hours} hours</Text>
              </View>
            ))}
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
  tipRow: {
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
  smallText: {
    color: "gray",
    fontFamily: "Inter_800ExtraBold",
    marginStart: 16,
  },
});

export default Dashboard;
