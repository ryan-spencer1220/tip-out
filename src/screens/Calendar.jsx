import { supabase } from "../config/supabaseConfig";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

const Calendar = () => {
  return (
    <View style={styles.content}>
      <Text>Calendar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: "stretch",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#282828",
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

export default Calendar;
