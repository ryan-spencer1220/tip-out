import { useEffect, useState, useRef } from "react";
import { supabase } from "../config/supabaseConfig";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FixedContent } from "../components/FixedContent";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [tipBreakdownSetting, setTipBreakdownSetting] = useState(true);
  const [salesSetting, setSalesSetting] = useState(false);
  const [coversSetting, setCoversSetting] = useState(false);
  const [userID, setUserID] = useState();
  const modal = [];

  const renderButtons = (links) => {
    return links.map((link, i) => (
      <Button key={i} onPress={() => modal[i].openModal()} name={link} />
    ));
  };

  const findUserID = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUserID(user.id);
  };

  async function getSettings() {
    const tipSettingDBCall = await supabase
      .from("profiles")
      .select("tip_breakdown")
      .eq("id", userID);
    const salesSettingDBCall = await supabase
      .from("profiles")
      .select("sales")
      .eq("id", userID);
    const coversSettingDBCall = await supabase
      .from("profiles")
      .select("covers")
      .eq("id", userID);
    setTipBreakdownSetting(tipSettingDBCall.data[0].tip_breakdown);
    setSalesSetting(salesSettingDBCall.data[0].sales);
    setCoversSetting(coversSettingDBCall.data[0].covers);
  }

  const updateTipBreakdownSetting = async () => {
    const { error } = await supabase
      .from("profiles")
      .update({ tip_breakdown: tipBreakdownSetting })
      .eq("id", userID);
    if (error) {
      console.log(error);
    }
  };

  const updateSalesSetting = async () => {
    const { error } = await supabase
      .from("profiles")
      .update({ sales: salesSetting })
      .eq("id", userID);
    if (error) {
      console.log(error);
    }
  };

  const updateCoversSetting = async () => {
    const { error } = await supabase
      .from("profiles")
      .update({ covers: coversSetting })
      .eq("id", userID);
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    findUserID();
    getSettings();
  }, [tipBreakdownSetting, coversSetting, salesSetting]);

  return (
    <SafeAreaView style={styles.background}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.content}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.largeCard}></TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.smallCard}
              onPress={() => {
                supabase.auth.signOut();
              }}
            >
              <Entypo name="log-out" size={40} color="#2b825b" />
              <Text style={styles.largeText}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.smallCard}
              onPress={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <Ionicons name="moon" size={40} color="#2b825b" />
              ) : (
                <Ionicons name="ios-sunny" size={40} color="#2b825b" />
              )}
              <Text style={styles.largeText}>
                {darkMode ? "Dark Mode" : "Light Mode"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.smallCard}>
              <FontAwesome name="bell" size={40} color="#2b825b" />
              <Text style={styles.largeText}>Reminders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.smallCard}>
              <FontAwesome5 name="file-export" size={40} color="#2b825b" />
              <Text style={styles.largeText}>Export Data</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.largeText}>Analytics Settings</Text>
          <TouchableOpacity style={styles.settingsRow}>
            <Text style={styles.smallText}>Cash & Credit Tips</Text>
            <Switch
              style={{ marginLeft: "auto", marginRight: 16 }}
              trackColor={{ false: "#2b825b", true: "#3e3e3e" }}
              thumbColor={tipBreakdownSetting ? "#2b825b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                setTipBreakdownSetting(!tipBreakdownSetting);
                updateTipBreakdownSetting();
              }}
              value={tipBreakdownSetting}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsRow}>
            <Text style={styles.smallText}>Total Sales</Text>
            <Switch
              style={{ marginLeft: "auto", marginRight: 16 }}
              trackColor={{ false: "#2b825b", true: "#3e3e3e" }}
              thumbColor={salesSetting ? "#2b825b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                setSalesSetting(!salesSetting);
                updateSalesSetting();
              }}
              value={salesSetting}
            />
          </TouchableOpacity>
          <FixedContent
            ref={(el) => {
              modal[1] = el;
            }}
          />
          <TouchableOpacity style={styles.settingsRow}>
            <Text style={styles.smallText}>Covers/Guests</Text>
            <Switch
              style={{ marginLeft: "auto", marginRight: 16 }}
              trackColor={{ false: "#2b825b", true: "#3e3e3e" }}
              thumbColor={coversSetting ? "#2b825b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                setCoversSetting(!coversSetting);
                updateCoversSetting();
              }}
              value={coversSetting}
            />
          </TouchableOpacity>
          <Text style={styles.largeText}>App Settings</Text>
          <TouchableOpacity
            style={styles.settingsRow}
            onPress={() => modal[1].openModal()}
          >
            <Text style={styles.smallText}>My Jobs</Text>
          </TouchableOpacity>
          <Text style={styles.largeText}>Terms & Agreements</Text>
          <TouchableOpacity style={styles.settingsRow}>
            <Text style={styles.smallText}>Terms of Use</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsRow}>
            <Text style={styles.smallText}>Privacy Policy</Text>
          </TouchableOpacity>
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
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 80,
  },
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
  },
  settingsRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "#1c1c1c",
    borderRadius: 10,
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
    paddingStart: 20,
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
    fontFamily: "Inter_800ExtraBold",
    paddingVertical: 10,
  },
  mediumText: {
    color: "#EDEDED",
    fontSize: 18,
    fontFamily: "Inter_800ExtraBold",
  },
  smallText: {
    color: "gray",
    fontFamily: "Inter_800ExtraBold",
    marginStart: 16,
  },
  textDark: {
    color: "#707070",
  },
  headline: {
    fontSize: 80,
    color: "#EDEDED",
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

export default Settings;
