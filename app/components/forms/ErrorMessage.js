import React from "react";
import { StyleSheet, Text } from "react-native";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <Text style={styles.errorDesign}>{error}</Text>;
}

const styles = StyleSheet.create({
  errorDesign: {
    fontSize: 10,
    color: "red",
  },
});
export default ErrorMessage;
