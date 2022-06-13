import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import defautlStyle from "../../config/styles";
function AppTextInput({ icon, onChangetext, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={20}
          color={colors.medium}
        />
      )}
      <TextInput
        onChangeText={onChangetext}
        style={defautlStyle.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 8,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
