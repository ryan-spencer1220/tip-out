import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.content}>
      <View style={styles.card}></View>
      <View style={styles.card}></View>
      <View style={styles.content}>
        <View style={styles.smCard}></View>
        <View style={styles.smCard}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 3,
    backgroundColor: "#1C1C1C",
  },
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#232323",
    width: "100%",
    height: 200,
    borderRadius: 10,
    margin: 10,
  },
  smCard: {
    backgroundColor: "#232323",
    width: "50%",
    height: 200,
    borderRadius: 10,
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

export default Dashboard;
