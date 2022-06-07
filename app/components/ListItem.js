import React from "react";
import { View, StyleSheet, Image,TouchableOpacity,TouchableHighlight } from "react-native";
import AppText from "./AppText";
import {GestureHandlerRootView,Swipeable} from 'react-native-gesture-handler';
import colors from "../../config/colors";


function ListItem({ title, subTitle, image, renderRightActions,ImageComponent, }) {
  return (
    <GestureHandlerRootView>
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={() => console.log('a')} underlayColor={'#eee'}>
      <View style={styles.container}>

        {ImageComponent}
        {image &&  <Image style={styles.image} source={image} />}
       
        <View style={{marginLeft: 10}}>
          <AppText style={styles.title}>{title}</AppText>
          {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
        </View>
        
      </View>
      </TouchableHighlight>
    </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  detailsContainer:{
    // justifyContent:'center',
    // alignItems:'center'
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
