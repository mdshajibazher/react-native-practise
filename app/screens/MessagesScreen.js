import React, {useState} from 'react';
import { FlatList,View,SafeAreaView,Platform,StatusBar,StyleSheet } from 'react-native';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItem from '../components/ListItem';
const initialMessages = [
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
];

function MessagesScreen(props) {
    const [messages,setMessages] = useState(initialMessages);
    const [refreshing,setRefreshing] = useState(false);
    const handleDelete = msg  => {
        const newArr = messages.filter(m => m.id !== msg.id)
        console.log(newArr);
        setMessages(newArr);
    }


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
                    renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                />}
                ItemSeparatorComponent={() => 
                    (<View 
                    style={{width: "100%", height: 1,backgroundColor: "#ccc"}}
                    />)}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([{
                        id: 3,
                        title: 'Mosh Vai 3',
                        description: 'Some description 3',
                        image: require('../assets/mosh.jpg')
                    }])
                }}
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