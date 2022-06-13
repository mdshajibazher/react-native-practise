import React from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "./Screen";
import * as Yup from "yup";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppForm from "../components/forms/AppForm";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <AppFormField
          name="email"
          placeholder="Enter Email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />

        <AppFormField
          name="password"
          placeholder="Enter Password"
          icon="form-textbox-password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry={true}
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
