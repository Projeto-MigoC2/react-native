import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Search from "../pages/Search";
import ModuleList from "../pages/ModuleList";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import Content from "../pages/Content";
import SettingsPage from "../pages/SettingsPage";
import About from "../pages/About";

import {
  AnimatedTabBarNavigator,
  DotSize, // optional
  TabElementDisplayOptions, // optional
  TabButtonLayout, // optional
  IAppearanceOptions, // optional
} from "react-native-animated-nav-tab-bar";
import theme from "../utils/Theme";

const Tab = AnimatedTabBarNavigator();

// const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

interface PageIcons {
  [key: string]: "home" | "search" | "book" | "settings";
}

function TabRoutes() {
  const pagesIcons: PageIcons = {
    Início: "home",
    Pesquisar: "search",
    Módulos: "book",
    Ajustes: "settings",
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = pagesIcons[route.name];
          return (
            <Feather
              name={iconName}
              size={size}
              color={focused ? theme.colors.secondaryColor : color}
            />
          );
        },
        headerShown: false,
      })}
      initialRouteName="Início"
      tabBarOptions={{
        activeTintColor: theme.colors.darkFontColor,
        activeBackgroundColor: theme.colors.primaryColor,
        tabStyle: {
          height: 80,
        },
      }}
      appearance={{}}
    >
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Pesquisar" component={Search} />
      <Tab.Screen name="Módulos" component={ModuleList} />
      <Tab.Screen name="Ajustes" component={SettingsPage} />
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
      <stack.Screen name="About" component={About} />
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
