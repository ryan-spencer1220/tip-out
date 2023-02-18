import { supabase } from "../config/supabaseConfig";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

const CalendarScreen = () => {
  return (
    <View style={styles.background}>
      <View style={styles.content}>
        <View style={{ flex: 1, padding: 10 }}>
          <Text style={styles.text}>Take Home</Text>
          <Text style={styles.text}>$0.00</Text>
        </View>
        <View style={{ flex: 2, padding: 10 }}>
          <Text style={styles.text}>Total Hours</Text>
          <Text style={styles.text}>0.00</Text>
        </View>
        <View style={{ flex: 3, padding: 10 }}>
          <Text style={styles.text}>Average Hourly</Text>
          <Text style={styles.text}>$0.00</Text>
        </View>
      </View>
      <Calendar
        style={{
          borderWidth: 1,
          borderColor: "gray",
          height: 350,
        }}
        theme={
          {
            // backgroundColor: "black",
            // calendarBackground: "black",
          }
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    // alignItems: "stretch",
    flex: 1,
    // justifyContent: "center",
    backgroundColor: "#1c1c1c",
    color: "white",
  },
  content: {
    justifyContent: "center",
    backgroundColor: "#282828",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    color: "#EDEDED",
    textAlign: "center",
  },
});

export default CalendarScreen;
