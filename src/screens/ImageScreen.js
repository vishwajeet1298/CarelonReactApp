import React from "react";
import { Button, StyleSheet, View } from "react-native";
import ImageDetails from "../components/ImageDetails";




const ImageScreen = (props) => {
    return (
        <View>
            <ImageDetails 
            title="Forest"
            score={28}
            imgSource={require('../../assets/images/forest.jpg')}/>
            <ImageDetails 
            title="Beach"
            score={18}
            imgSource={require('../../assets/images/beach.jpg')}
            />
            <ImageDetails 
            title="Mountain"
            score={24}
            imgSource={require('../../assets/images/mountain.jpg')} />

            <Button
            title="Click here to go to HomeScreen"
            onPress={()=>props.navigation.navigate('Home')} />
        </View>
    );
};

const styles = StyleSheet.create({});
export default ImageScreen;
