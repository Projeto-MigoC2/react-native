import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Page1 from "./src/pages/Home";
import Page2 from "./src/pages/Search";
import Page3 from "./src/pages/ContentList";
import Routes from "./src/routes";

const Tab = createBottomTabNavigator();

export default function App() {
  return <Routes />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
