import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import AboutScreen from "./screens/AboutScreen";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "steelblue" },
          headerTintColor: "white",
          headerTitleAlign: "center",
          tabBarActiveTintColor: "coral",
        }}
      >
        <BottomTab.Screen
          name={"home_screen"}
          component={WelcomeScreen}
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={"home"} size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name={"user_screen"}
          component={UserScreen}
          options={{
            title: "User",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={"person"} size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name={"about_screen"}
          component={AboutScreen}
          options={{
            title: "About",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name={"information-circle-sharp"}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
