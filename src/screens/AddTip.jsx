import { useState } from "react";
import { supabase } from "../config/supabaseConfig";
import { SelectList } from "react-native-dropdown-select-list";
import DatePicker from "react-native-date-picker";
import React from "react";
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

const AddTip = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [cashTips, setCashTips] = useState(0);
  const [creditTips, setCreditTips] = useState(0);
  const [hours, setHours] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [job, setJob] = useState(data);
  const [notes, setNotes] = useState("");

  const data = [
    { key: "2", value: "server" },
    { key: "3", value: "bartender" },
  ];

  const addTip = async (date, cashTips, creditTips, job, hours, notes) => {
    setError("");
    const { data, error } = await supabase.from("tips").insert([
      {
        // date: date,
        cash_tips: 50,
        credit_tips: 100,
        job: "Server",
        hours: hours,
        notes: notes,
      },
    ]);

    if (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.content}>
      <View style={styles.card}>
        <View style={styles.container}>
          <DatePicker
            modal
            open={open}
            date={date}
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
            value={date.toString()}
            onChangeText={(date) => setDate(date)}
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
          onPress={() => addTip(cashTips, creditTips, job, hours, notes)}
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
  or: {
    color: "white",
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
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
  borderButton: {
    marginTop: 10,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#3c3c3c",
  },
  solidButton: {
    marginTop: 10,
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: "#2E2E2E",
    borderRadius: 5,
    borderWidth: 1,
  },
  forgotPassword: {
    margin: 38,
  },
});

export default AddTip;
