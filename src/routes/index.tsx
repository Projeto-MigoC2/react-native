import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Search from "../pages/Search";
import ModuleList from "../pages/ModuleList";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import Content from "../pages/Content";

const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

function TabRoutes() {
  return (
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
        component={ModuleList}
      />
    </Tab.Navigator>
  );
}

function StackRoutes() {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="tabRoutes"
    >
      <stack.Screen name="tabRoutes" component={TabRoutes} />
      <stack.Screen name="Content" component={Content} />
    </stack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
