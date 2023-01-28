import React from "react";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Session } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
import { supabase } from "./src/config/supabaseConfig";

const Stack = createNativeStackNavigator();

export default function App() {
  const [session, setSession] = useState();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <NotificationsProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerLeft: null,
              headerStyle: {
                backgroundColor: "#1C1C1C",
                color: "white",
              },
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerBackVisible: false,
              headerStyle: {
                backgroundColor: "#1C1C1C",
                color: "white",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NotificationsProvider>
  );
}
