import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


const ImageDetails = ({title,imgSource,score}) => {
    //console.log(props);
    return (
        <View>
            <Image source={imgSource}
            style={styles.imgSize}></Image>
            <Text >{title}</Text>
            <Text >{score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imgSize:
    {
        
        width: 100,
        height: 100,    
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default ImageDetails;