import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect, useCallback } from "react";
import { supabase } from "../config/supabaseConfig";

const Dashboard = ({ navigation }) => {
  const [userTips, setUserTips] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [timeframe, setTimeframe] = useState(7);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  async function getTips() {
    const tips = await supabase.from("tips").select();
    setUserTips(tips);
  }

  useEffect(() => {
    getTips();
  }, [refreshing]);

  function format(date) {
    let year = date.slice(0, 4);
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);

    return `${day}/${month}/${year}`;
  }

  return (
    <SafeAreaView style={styles.background}>
      <ScrollView
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={"#FFFFFF"}
            tintColor={"#FFFFFF"}
          />
        }
      >
        <View style={styles.content}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.sortButton}>
              <Text>All Time</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortButton}>
              <Text>Yearly</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortButton}>
              <Text>Monthly</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortButton}>
              <Text>Weekly</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}></View>
          {userTips &&
            userTips.data.map((userTip) => (
              <View style={styles.tipRow} key={userTip.id}>
                <Text style={styles.smallText}>{format(userTip.date)}</Text>
                <Text style={styles.smallText}>{userTip.job}</Text>
                <Text style={styles.smallText}>{userTip.hours}hrs</Text>
                <View style={styles.padding}>
                  <Text style={styles.smallText}>
                    Credit: ${userTip.credit_tips}
                  </Text>
                  <Text style={styles.smallText}>
                    Cash: ${userTip.cash_tips}
                  </Text>
                </View>
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
    justifyContent: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  padding: {
    padding: 10,
  },
  tipRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
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
  sortButton: {
    padding: 8,
    backgroundColor: "#2b825b",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#2E2E2E",
    fontSize: 16,
  },
});

export default Dashboard;
