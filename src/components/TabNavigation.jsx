import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import Settings from "../screens/Settings";
import Calendar from "../screens/Calendar";
import Statistics from "../screens/Statistics";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
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
                color="#2b825b"
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
        tabBarActiveTintColor: "tomato",
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Statistics" component={Statistics} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
