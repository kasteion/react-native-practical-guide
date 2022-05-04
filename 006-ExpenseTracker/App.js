import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { store } from "./store/redux/store";
import { Provider } from "react-redux";
import ExpensesScreen from "./screens/ExpensesScreen";
import ExpenseFormScreen from "./screens/ExpenseFormScreen";
import { GlobalStyles } from "./constants/styles";
import IconButton from "./components/ui/IconButton";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
          height: 100,
        },
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: "white",
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarInactiveTintColor: "white",
        headerRight: ({ tintColor }) => (
          <IconButton
            name="add"
            color={tintColor}
            size={30}
            onPress={() => {
              navigation.navigate("AddExpense");
            }}
          />
        ),
      })}
      sceneContainerStyle={{
        backgroundColor: "#4918ba",
      }}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={ExpensesScreen}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={ExpensesScreen}
        options={{
          title: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: { backgroundColor: GlobalStyles.colors.primary700 },
            presentation: "modal",
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="TabsNavigator"
            component={TabsNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AddExpense"
            component={ExpenseFormScreen}
            options={{ title: "Add Expense" }}
          />
          <Stack.Screen
            name="EditExpense"
            component={ExpenseFormScreen}
            options={{ title: "Edit Expense" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
