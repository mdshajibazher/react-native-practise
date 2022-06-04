import React from 'react';
import reactDom from 'react-dom';
import { FlatList,View,SafeAreaView,Platform,StatusBar,StyleSheet } from 'react-native';

import ListItem from '../components/ListItem';
const messages = [
    {
        id: 1,
        title: 'Mosh Vai 1',
        description: 'Some description',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'Mosh Vai 2',
        description: 'Some description 2',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 3,
        title: 'Mosh Vai 3',
        description: 'Some description 3',
        image: require('../assets/mosh.jpg')
    }
]
function MessagesScreen(props) {
    return (
        <SafeAreaView style={styles.screen}>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => 
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    renderRightActions={() => (
                        <View 
                        style={{
                            backgroundColor: "red",
                            width: 30,
                        }}>
                        </View>
                     )}
                />}
                ItemSeparatorComponent={() => 
                    (<View 
                    style={{width: "100%", height: 1,backgroundColor: "#ccc"}}
                    />)}
            ></FlatList>
           
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})
export default MessagesScreen;