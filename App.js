import React,{useState} from 'react';
import { TextInput,Switch } from 'react-native';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/screens/Screen';
import {Picker} from '@react-native-picker/picker';


export default function App() {
    // const [isNew,setIsNew] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState();

    return  (<Screen>
            <Picker
                style={{borderColor: "black"}}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        {/* <AppTextInput placeholder='Enter a text' icon={'email'}/> */}
        {/* <Switch value={isNew} onValueChange={newValue => {setIsNew(newValue); console.log(isNew)}}/> */}
    </Screen>);
    
}

