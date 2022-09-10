import ScreenConstant from "../constants/ScreenConstant";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Chats, Calls, Camera, Settings, Status } from "../screens/index";
import IconConstant from "../constants/IconConstant";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../constants/colors";

const Tab = createBottomTabNavigator();

export default function () {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ScreenConstant.Chats}
      
    >
      <Tab.Screen
        name={ScreenConstant.Calls}
        component={Calls}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={IconConstant.CALL}
              size={22}
              color={focused ? Colors.THEME : Colors.GRAY}
            />
          ),
          tabBarActiveTintColor: Colors.THEME,
          tabBarInactiveTintColor: Colors.GRAY,
        }}
      />
      <Tab.Screen
        name={ScreenConstant.Status}
        component={Status}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={IconConstant.STATUS}
              size={22}
              color={focused ? Colors.THEME : Colors.GRAY}
            />
          ),
          tabBarActiveTintColor: Colors.THEME,
          tabBarInactiveTintColor: Colors.GRAY,
        }}
      />
      <Tab.Screen
        name={ScreenConstant.Camera}
        component={Camera}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={IconConstant.CAMERA}
              size={22}
              color={focused ? Colors.THEME : Colors.GRAY}
            />
          ),
          tabBarActiveTintColor: Colors.THEME,
          tabBarInactiveTintColor: Colors.GRAY,
        }}
      />
      <Tab.Screen
        name={ScreenConstant.Settings}
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={IconConstant.SETTINGS}
              size={22}
              color={focused ? Colors.THEME : Colors.GRAY}
            />
          ),
          tabBarActiveTintColor: Colors.THEME,
          tabBarInactiveTintColor: Colors.GRAY,
        }}
      />
      <Tab.Screen
        name={ScreenConstant.Chats}
        component={Chats}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={IconConstant.CHATS}
              size={22}
              color={focused ? Colors.THEME : Colors.GRAY}
            />
          ),
          tabBarActiveTintColor: Colors.THEME,
          tabBarInactiveTintColor: Colors.GRAY,
        }}
      />
    </Tab.Navigator>
  );
}
