import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/styles";
import Input from "./Input";
import Button from "../ui/Button";
import FlatButton from "../ui/FlatButton";
import { useNavigation } from "@react-navigation/native";

const AuthForm = ({ onAuthenticate, isLogin }) => {
  const [inputs, setInputs] = useState({
    email: { value: "", isValid: true },
    confirmEmail: { value: "", isValid: true },
    password: { value: "", isValid: true },
    confirmPassword: { value: "", isValid: true },
  });
  const navigation = useNavigation();

  function inputChangeHandler(inputIdentifier, inputValue) {
    setInputs((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: { value: inputValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const authData = {
      email: inputs.email.value,
      confirmEmail: inputs.confirmEmail.value,
      password: inputs.password.value,
      confirmPassword: inputs.confirmPassword.value,
    };

    const isEmailValid =
      authData.email.trim().length > 0 && authData.email.includes("@");
    const isPasswordValid = authData.password.trim().length > 6;
    const isConfirmEmailValid = authData.email === authData.confirmEmail;
    const isConfirmPasswordValid =
      authData.password === authData.confirmPassword;

    if (!isEmailValid || !isPasswordValid) {
      setInputs((currentInputValues) => {
        return {
          ...currentInputValues,
          email: {
            value: currentInputValues.email.value,
            isValid: isEmailValid,
          },
          password: {
            value: currentInputValues.password.value,
            isValid: isPasswordValid,
          },
        };
      });
      return;
    }

    if (!isLogin) {
      if (!isConfirmEmailValid || !isConfirmPasswordValid) {
        setInputs((currentInputValues) => {
          return {
            ...currentInputValues,
            confirmEmail: {
              value: currentInputValues.confirmEmail.value,
              isValid: isConfirmEmailValid,
            },
            confirmPassword: {
              value: currentInputValues.confirmPassword.value,
              isValid: isConfirmPasswordValid,
            },
          };
        });
        return;
      }
    }

    // onSubmit(authData);
    onAuthenticate(authData);
  }

  function switchAuthModeHandler() {
    if (isLogin) {
      // navigation.navigate("Signup");
      navigation.replace("Signup");
    } else {
      // navigation.navigate("Login");
      navigation.replace("Login");
    }
  }

  const isFormInvalid =
    !inputs.email.isValid ||
    !inputs.password.isValid ||
    !inputs.confirmEmail.isValid ||
    !inputs.confirmPassword.isValid;

  return (
    <View style={styles.container}>
      <Input
        label="Email Address"
        value={inputs.email.value}
        invalid={!inputs.email.isValid}
        textInputConfig={{
          autoCapitalize: "none",
          onChangeText: inputChangeHandler.bind(this, "email"),
        }}
      />
      {!isLogin && (
        <Input
          label="Confirm Email Address"
          value={inputs.confirmEmail.value}
          invalid={!inputs.confirmEmail.isValid}
          textInputConfig={{
            autoCapitalize: "none",
            onChangeText: inputChangeHandler.bind(this, "confirmEmail"),
          }}
        />
      )}
      <Input
        label="Password"
        value={inputs.password.value}
        invalid={!inputs.password.isValid}
        textInputConfig={{
          secureTextEntry: true,
          autoCapitalize: "none",
          onChangeText: inputChangeHandler.bind(this, "password"),
        }}
      />
      {!isLogin && (
        <Input
          label="Confirm Password"
          value={inputs.confirmPassword.value}
          invalid={!inputs.confirmPassword.isValid}
          textInputConfig={{
            secureTextEntry: true,
            autoCapitalize: "none",
            onChangeText: inputChangeHandler.bind(this, "confirmPassword"),
          }}
        />
      )}
      {isFormInvalid && (
        <Text style={styles.errorText}>
          Invalid input, pleasecheck your entered credentials.
        </Text>
      )}
      <Button label="Log In" onPress={submitHandler} />
      <FlatButton
        label={isLogin ? "Create a new user" : "Log in instead"}
        onPress={switchAuthModeHandler}
      />
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary800,
    marginTop: 24,
    borderRadius: 10,
    padding: 10,
    shadowColor: Colors.primary800,
    shadowRadius: 4,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
  },
  errorText: {
    textAlign: "center",
    margin: 8,
    color: Colors.error500,
  },
});
