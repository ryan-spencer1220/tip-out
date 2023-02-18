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
        theme={{
          backgroundColor: "black",
          calendarBackground: "black",
          textSectionTitleColor: "#b6c1cd",
          textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#2b825b",
          dayTextColor: "gray",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "#2b825b",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: "#2b825b",
          indicatorColor: "#2b825b",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
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
