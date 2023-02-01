import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
