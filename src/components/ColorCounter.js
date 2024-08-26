import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";


const ColorCounter=({color,onIncrease,onDecrease})=>{

    return(
        <View>
            <Text>{color}</Text>
            <Button onPress={()=>onIncrease()} title={`Increase ${color}`}></Button>
            <Button onPress={()=>onDecrease()} title={`Decrease ${color}`}></Button>
            
        </View>

    );
};
const styles=StyleSheet.create({});
export default ColorCounter;