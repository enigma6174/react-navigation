import { Button, StyleSheet, Text, View } from "react-native";

export default function AboutScreen({ navigation }) {
  function drawerHandler() {
    navigation.toggleDrawer();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is the <Text style={styles.highlight}>About</Text> screen
      </Text>
      <Button title={"Open Drawer"} onPress={drawerHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "500",
  },
  highlight: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#eb1064",
  },
});
