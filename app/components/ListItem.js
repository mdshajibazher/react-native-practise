import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import AppText from "./AppText";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { clearErrors } from "react-native/Libraries/LogBox/Data/LogBoxData";

function ListItem({
  title,
  subTitle,
  image,
  renderRightActions,
  ImageComponent,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
          onPress={() => console.log("a")}
          underlayColor={"#eee"}
        >
          <View style={styles.container}>
            {ImageComponent}
            {image && <Image style={styles.image} source={image} />}

            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText numberOfLines={2} style={styles.subTitle}>
                  {subTitle}
                </AppText>
              )}
            </View>
            <MaterialCommunityIcons
              color={colors.medium}
              name="chevron-right"
              size={25}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  detailsContainer: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
