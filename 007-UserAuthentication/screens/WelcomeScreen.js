import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Colors } from "../constants/styles";
import { AuthContext } from "../store/auth-context";

const WelcomeScreen = () => {
  const [fetchedMessage, setFetchedMessage] = useState("");
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    axios
      .get(
        `https://practical-react-native-fbcbf-default-rtdb.firebaseio.com/message.json?auth=${token}`
      )
      .then((response) => {
        setFetchedMessage(response.data);
      });
  }, [token]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.text}>You authenticated successfully!</Text>
      <Text style={styles.text}>{fetchedMessage}</Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary100,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: Colors.primary800,
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    color: Colors.primary800,
  },
});
