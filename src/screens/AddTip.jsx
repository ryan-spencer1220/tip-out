import { useEffect, useState } from "react";
import { supabase, auth } from "../config/supabaseConfig";
import { SelectList } from "react-native-dropdown-select-list";
import DatePicker from "react-native-date-picker";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AddTip = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [cashTips, setCashTips] = useState(0);
  const [creditTips, setCreditTips] = useState(0);
  const [hours, setHours] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [job, setJob] = useState(data);
  const [notes, setNotes] = useState("");
  const [userID, setUserID] = useState();

  const data = [
    { key: "2", value: "server" },
    { key: "3", value: "bartender" },
  ];

  console.log(cashTips, creditTips);

  const addTip = async (date, cashTips, creditTips, job, hours, notes) => {
    setErrorMessage("");
    console.log(cashTips, creditTips);
    const { data, error } = await supabase.from("tips").insert([
      {
        user_id: userID,
        date: format(date),
        cash_tips: cashTips,
        credit_tips: creditTips,
        job: "Server",
        hours: hours,
        notes: notes,
      },
    ]);

    if (error) {
      setErrorMessage(error.message);
      console.log(error);
    }

    setCashTips(0);
    setCreditTips(0);
    setHours(0);
    setNotes("");
    navigation.navigate("Dashboard");
  };

  const findUserID = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUserID(user.id);
  };

  function format(inputDate) {
    let date, month, year;

    date = inputDate.getDate();
    month = inputDate.getMonth() + 1;
    year = inputDate.getFullYear();

    date = date.toString().padStart(2, "0");

    month = month.toString().padStart(2, "0");

    return `${year}/${month}/${date}`;
  }

  useEffect(() => {
    findUserID();
  }, [userID]);

  return (
    <View style={styles.content}>
      <View style={styles.card}>
        <View style={styles.container}>
          <DatePicker
            modal
            open={open}
            date={date}
            mode={"date"}
            onConfirm={(date) => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <Text style={styles.textLeft}>Enter Date</Text>
          <TextInput
            label="Enter Date"
            value={format(date)}
            onChangeText={(date) => setDate(date.toISOString())}
            style={styles.item}
            placeholder="Enter Date"
            placeholderTextColor="#484848"
            onPressIn={() => setOpen(true)}
          />
          <View style={styles.outline}>
            <Text style={styles.textLeft}>Cash Tips</Text>
            <TextInput
              label="Enter Amount"
              value={cashTips}
              onChangeText={(cash) => setCashTips(+cash)}
              style={styles.item}
              placeholder="Enter Amount"
              placeholderTextColor="#484848"
              keyboardType="number-pad"
            />
            <Text style={styles.textLeft}>Credit Tips</Text>
            <TextInput
              label="Enter Amount"
              value={creditTips}
              onChangeText={(credit) => setCreditTips(+credit)}
              style={styles.item}
              placeholder="Enter Amount"
              placeholderTextColor="#484848"
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.outline}>
            <Text style={styles.textLeft}>Job</Text>
            <View style={styles.selectList}>
              <SelectList
                setSelected={(job) => setJob(job)}
                data={data}
                save="value"
                label="Categories"
                boxStyles={{
                  backgroundColor: "#222222",
                  color: "#707070",
                  borderColor: "#3c3c3c",
                }}
                inputStyles={{ color: "#707070" }}
                dropdownTextStyles={{ color: "#707070" }}
              />
            </View>
            <Text style={styles.textLeft}>Hours</Text>
            <TextInput
              label="Enter Amount"
              value={hours}
              onChangeText={(hours) => setHours(hours)}
              style={styles.item}
              placeholder="Enter Hours"
              placeholderTextColor="#484848"
              keyboardType="number-pad"
            />
          </View>
        </View>
        <Text style={styles.textLeft}>Notes</Text>
        <TextInput
          label="Enter Amount"
          value={notes}
          onChangeText={(notes) => setNotes(notes)}
          style={styles.textArea}
          placeholderTextColor="#484848"
          keyboardType="default"
          numberOfLines={2}
        />
        <TouchableOpacity
          style={styles.submitButton}
          underlayColor="#fff"
          disabled={loading}
          onPress={() => addTip(date, cashTips, creditTips, job, hours, notes)}
        >
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#1C1C1C",
  },
  container: {
    marginBottom: 20,
  },
  card: {
    marginLeft: 40,
    marginRight: 40,
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
    fontSize: 30,
    paddingBottom: 20,
    color: "#EDEDED",
  },
  outline: {
    borderColor: "#3c3c3c",
    borderRadius: 10,
    paddingBottom: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: "100%",
  },
  item: {
    marginTop: 12,
    marginBottom: 12,
    padding: 10,
    backgroundColor: "#222222",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#3c3c3c",
    color: "white",
  },
  selectList: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  textArea: {
    marginTop: 12,
    marginBottom: 12,
    padding: 10,
    backgroundColor: "#222222",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#3c3c3c",
    color: "white",
    height: 100,
    textAlignVertical: "top",
  },
  submitButton: {
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: "#2b825b",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#2E2E2E",
    fontSize: 16,
  },
});

export default AddTip;
