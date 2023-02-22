import { supabase } from "../config/supabaseConfig";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import StatsChart from "../components/StatsChart";

const Statistics = () => {
  return (
    <View style={styles.background}>
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.smallCard}>
            <FontAwesome5 name="money-bill" size={48} color="#2b825b" />
            <Text style={styles.smallText}>Hourly Rate</Text>
            <Text style={styles.largeText}>$35.45/hr</Text>
            <Text style={styles.smallText}>Last 30 Days</Text>
          </View>
          <View style={styles.smallCard}>
            <FontAwesome5 name="hand-holding-usd" size={48} color="#2b825b" />
            <Text style={styles.smallText}>Daily income</Text>
            <Text style={styles.largeText}>$250/day</Text>
            <Text style={styles.smallText}>7 Day Average</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.largeCard}>
            <StatsChart />
          </View>
        </View>
      </View>
    </View>
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

export default Statistics;
