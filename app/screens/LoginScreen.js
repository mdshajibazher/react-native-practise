import React from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "./Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import ErrorMessage from "../components/ErrorMessage";
import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <Image
              source={require("../assets/logo-red.png")}
              style={styles.logo}
            />
            <AppTextInput
              onBlur={() => setFieldTouched("email")}
              placeholder="Enter Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangetext={handleChange("email")}
            />
            {errors.email && touched.email && (
              <ErrorMessage visible={touched.email} error={errors.email} />
            )}
            <AppTextInput
              onBlur={() => setFieldTouched("password")}
              placeholder="Enter Password"
              icon="form-textbox-password"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry={true}
              onChangetext={handleChange("password")}
            />
            {errors.password && touched.password && (
              <ErrorMessage visible={touched.email} error={errors.password} />
            )}

            <AppButton title="login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
