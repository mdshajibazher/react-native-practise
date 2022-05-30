
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
    StatusBar,
    Dimensions
} from 'react-native';
import prompt from 'react-native-prompt-android';
import {useDeviceOrientation, useDimensions} from "@react-native-community/hooks";


export default function App() {
    console.log(useDimensions(),useDeviceOrientation())
    const {landscape} = useDeviceOrientation();
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
            <View style={{
                backgroundColor: 'dodgerblue',
                width: '100%',
                height: landscape ? "100%" : "30%"
            }}>
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
