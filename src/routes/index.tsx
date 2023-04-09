import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Search from "../pages/Search";
import ContentList from "../pages/ContentList";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="search" color={color} size={size} />
            ),
          }}
          name="search"
          component={Search}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="bookshelf"
                color={color}
                size={size}
              />
            ),
          }}
          name="ContentList"
          component={ContentList}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
