import React from "react";
import { StyleSheet, View } from "react-native";


const BoxScreen = () => {
    
    return(
        <View style={styles.viewStyle}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:
    {
        borderColor: 'black',
        borderWidth: 2,
        height:240,
        justifyContent:'space-between',
        flexDirection:'row',     
    },
    box1:
    {
        borderColor: 'red',
        borderWidth: 2, 
        backgroundColor:'pink',  
        height:60,
        width:60,       
    },
    box2:
    {
        borderColor: 'green',
        borderWidth: 2, 
        backgroundColor:'lightgreen', 
        height:60,
        width:60,
        position:'relative',
        // justifyContent:'center',
        top:60,
        


    },
    box3:
    {
        borderColor: 'blue',
        borderWidth: 2, 
        backgroundColor:'lightblue',
        height:60,
        width:60,         
    }
});
export default BoxScreen;