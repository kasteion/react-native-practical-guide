import { StyleSheet, View, Alert } from "react-native";
import React, { useState, useContext } from "react";
import { Colors } from "../constants/styles";
import AuthForm from "../components/Auth/AuthForm";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { AuthContext } from "../store/auth-context";

const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function signinHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check  your credentials or try again later!"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return (
    <View style={styles.container}>
      <AuthForm isLogin onAuthenticate={signinHandler} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary100,
    padding: 24,
  },
});
