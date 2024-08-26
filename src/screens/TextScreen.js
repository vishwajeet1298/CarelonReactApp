import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";


const TextScreen = () => {
    const [name, setName] = useState('');
    return(
        <View>
            <Text>Text Entered:{name}</Text>
            <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={newValue=>setName(newValue)}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    input:
    {
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        padding: 10,
    }
});
export default TextScreen