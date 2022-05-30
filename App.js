
import {
    StyleSheet,
    SafeAreaView,
    Text,
    Button,
    View,
    TouchableWithoutFeedback,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    Alert,
    Platform,
    StatusBar
} from 'react-native';
import prompt from 'react-native-prompt-android';


export default function App() {

    const handlePress = () => Alert.alert('My Title', 'My Message', [{
        text: "yes", onPress: () => {
            console.log('you clicked yes')
        }
    }, {
        text: "no", onPress: () => {
            console.log('you clicked no')
        }
    }])

    const handlePress2 = () => {
        console.log('hello')
        // prompt(
        //     'Enter password',
        //     'Enter your password to claim your $1.5B in lottery winnings',
        //     [
        //         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        //         {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
        //     ]
        // )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Button color={'tomato'} title={'click me'} onPress={handlePress}></Button>
            </View>
            <View style={{marginTop: 15}}>
                <Button color={'dodgerblue'} title={'click me'} onPress={handlePress2}></Button>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "#000",
    },
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor: '#fdcb6e',
        // justifyContent: "center",
        // alignItems: "center",
        color: "#fff"
    },
});
