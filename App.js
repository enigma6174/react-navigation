import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import AboutScreen from "./screens/AboutScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "steelblue" },
          headerTintColor: "white",
          headerTitleAlign: "center",
          drawerActiveBackgroundColor: "dodgerblue",
          drawerActiveTintColor: "white",
        }}
      >
        <Drawer.Screen
          name={"home_screen"}
          component={WelcomeScreen}
          options={{
            title: "Home",
            drawerLabel: "Home Page",
            drawerIcon: ({ color, size }) => (
              <Ionicons name={"home"} size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name={"user_screen"}
          component={UserScreen}
          options={{
            title: "User",
            drawerLabel: "User Profile",
            drawerIcon: ({ color, size }) => (
              <Ionicons name={"person"} size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name={"about_screen"}
          component={AboutScreen}
          options={{
            title: "About",
            drawerLabel: "About",
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name={"information-circle-sharp"}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
