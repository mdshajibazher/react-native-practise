import React, { useState } from "react";
import {
  FlatList,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItem from "../components/ListItem";
const initialMessages = [
  {
    id: 1,
    title: "Mosh Vai 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Mosh Vai 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "Mosh Vai 3",
    description: "Some description 3",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (msg) => {
    const newArr = messages.filter((m) => m.id !== msg.id);
    console.log(newArr);
    setMessages(newArr);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={{ padding: 10, backgroundColor: "#eee", flex: 1 }}>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{ width: "100%", height: 1, backgroundColor: "#ccc" }}
            />
          )}
          refreshing={refreshing}
          onRefresh={() => {
            setMessages([
              {
                id: 3,
                title: "Mosh Vai 3",
                description: "Some description 3",
                image: require("../assets/mosh.jpg"),
              },
            ]);
          }}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
export default MessagesScreen;
