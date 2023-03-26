import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect, useCallback } from "react";
import { supabase } from "../config/supabaseConfig";
import { useIsFocused } from "@react-navigation/native";

const Dashboard = ({ navigation }) => {
  const [userTips, setUserTips] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [timeframe, setTimeframe] = useState(7);

  const isFocused = useIsFocused();

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
  }, [refreshing, isFocused]);

  function format(date) {
    let year = date.slice(0, 4);
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);

    return `${month}/${day}`;
  }

  const options = [
    { label: "01:00", value: "1" },
    { label: "01:30", value: "1.5" },
    { label: "02:00", value: "2" },
  ];

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
          {userTips &&
            userTips.data.map((userTip) => (
              <TouchableOpacity style={styles.tipRow} key={userTip.id}>
                <View style={styles.row}>
                  <Text style={styles.moneyText}>
                    $
                    {Math.floor(
                      (userTip.credit_tips + userTip.cash_tips) / userTip.hours
                    )}
                    <Text style={styles.smallText}>/ hr</Text>
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.smallText}>
                    <Entypo name="calendar" size={24} color="#2b825b" />
                    {`  ${format(userTip.date)}`}
                  </Text>
                  <View style={styles.iconFlex}>
                    <Text style={styles.smallText}>
                      <FontAwesome5
                        name="money-bill"
                        size={24}
                        color="#2b825b"
                      />
                      {`  $${userTip.cash_tips + userTip.credit_tips}`}
                    </Text>
                  </View>

                  <Text style={styles.smallText}>
                    <AntDesign name="clockcircleo" size={24} color="#2b825b" />
                    {` ${userTip.hours}hrs`}
                  </Text>
                </View>
              </TouchableOpacity>
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
    justifyContent: "space-between",
  },
  padding: {
    padding: 10,
    margin: 10,
  },
  iconFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tipRow: {
    flex: 1,
    flexDirection: "column",
    marginTop: 6,
    marginBottom: 6,
    backgroundColor: "#282828",
    borderRadius: 10,
    borderColor: "#1c1c1c",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 20,
  },
  smallText: {
    color: "gray",
    fontFamily: "Inter_800ExtraBold",
    marginStart: 20,
    fontSize: 18,
  },
  moneyText: {
    color: "#2b825b",
    fontWeight: "bold",
    fontSize: 40,
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
