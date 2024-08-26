
//PART 1  -- Importing Libraries

import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

//PART 2 -- Creating a Component
const ComponentsScreen = (props) => {
    const myname = "Mr. Singh";

    return (
        <View>

            <Text style={styles.textStyle}>Hello!</Text>
            <Text style={styles.subHeader}>My name is {myname}</Text>
            <Button title="Click Here"></Button>
            <Button
                title="Click here to Go to Image Screen"
                onPress={()=>props.navigation.navigate('Image')}
            />
            <Button
            title="Go to Text Screen"
            onPress={()=>props.navigation.navigate('Text')}
            />
        </View>

    );
};

//PART 3 -- Styling the Component
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeader: {
        fontSize: 12
    }

});


//PART 4 -- Exporting the Component
export default ComponentsScreen;