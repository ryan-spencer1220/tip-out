import { supabase } from "../config/supabaseConfig";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

const Statistics = () => {
  return (
    <View style={styles.background}>
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.smallCard}>
            <Text style={styles.text}>Hourly Rate</Text>
            <Text style={styles.text}>$35.45/hr</Text>
            <Text style={styles.text}>Last 30 Days</Text>
          </View>
          <View style={styles.smallCard}>
            <Text style={styles.text}>Daily income</Text>
            <Text style={styles.text}>$250/day</Text>
            <Text style={styles.text}>7 Day Average</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.largeCard}></View>
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
    width: "45%",
    aspectRatio: 1 / 1,
    position: "relative",
    backgroundColor: "#1c1c1c",
    borderRadius: 20,
    margin: 10,
  },
  largeCard: {
    width: "95%",
    aspectRatio: 2 / 1,
    position: "relative",
    backgroundColor: "#1c1c1c",
    borderRadius: 20,
    margin: 10,
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
