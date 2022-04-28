import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverview";
import FavoritesScreen from "./screens/FavoritesScreen";
// Here we start using React Navigation
import { NavigationContainer } from "@react-navigation/native";
// Here we use the navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Here we import the drawer navigator
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealDetailScreen from "./screens/MealDetailScreen";
import { AntDesign } from "@expo/vector-icons";
// Here we create a stack navigator
const Stack = createNativeStackNavigator();
// Here we create a drawer navigator
const Drawer = createDrawerNavigator();

// In this function we define another navigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#24180f" },
        sceneContainerStyle: { backgroundColor: "#24180f" },
        headerTintColor: "white",
        drawerContentStyle: { backgroundColor: "#24180f" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e2b497",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <AntDesign name="bars" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "My Favorites",
          drawerIcon: ({ color, size }) => (
            <AntDesign name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        {/*

          By default the first element is the default screen but we
          can define an initialRouteName to select the default screen
          we want for our app.

          <Stack.Navigator initialRouteName="ProductDetails">
            <Stack.Screen name="AllProducts" component={AllProducts} /> 
            <Stack.Screen name="ProductDetails" component={ProductDetails} /> // initial screen
          </Stack.Navigator>
          
        */}
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#24180f" },
            contentStyle: { backgroundColor: "#24180f" },
            headerTintColor: "white",
          }}
        >
          {/* <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{ title: "All Categories" }}
          /> 
          
          Instead of using a component we can use the DrawerNavigator function defined before */}
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Overview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{ title: "Meal Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
