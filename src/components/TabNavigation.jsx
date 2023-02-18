import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import Settings from "../screens/Settings";
import Calendar from "../screens/CalendarScreen";
import Statistics from "../screens/Statistics";
import AddTip from "../screens/AddTip";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";

const Tab = createBottomTabNavigator();

function TabNavigation() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: "rgba(34,36,40,1)",
          position: "absolute",
          borderTopWidth: 0,
        },
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Dashboard") {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Calendar") {
            return (
              <Ionicons
                name={focused ? "calendar" : "calendar-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "AddTip") {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Statistics") {
            return (
              <Ionicons
                name={focused ? "podium" : "podium-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Settings") {
            return (
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#2b825b",
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: "Dashboard",
          headerStyle: {
            backgroundColor: "#1c1c1c",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "Inter_500Medium",
            fontSize: 22,
            letterSpacing: 0.5,
          },
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          title: "Calendar",
          headerStyle: {
            backgroundColor: "#1c1c1c",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "Inter_500Medium",
            fontSize: 22,
            letterSpacing: 0.5,
          },
        }}
      />
      <Tab.Screen
        name="Add Tip"
        component={AddTip}
        options={{
          title: "Add Tip",
          headerStyle: {
            backgroundColor: "#1c1c1c",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "Inter_500Medium",
            fontSize: 22,
            letterSpacing: 0.5,
          },
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          title: "Statistics",
          headerStyle: {
            backgroundColor: "#1c1c1c",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "Inter_500Medium",
            fontSize: 22,
            letterSpacing: 0.5,
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: "#1c1c1c",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "Inter_500Medium",
            fontSize: 22,
            letterSpacing: 0.5,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
