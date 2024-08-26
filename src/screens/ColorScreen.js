import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';


const ColorScreen = () => {
const [color, setColor] = useState(randomRgb());
//console.log(colors);

    return(
        <View style={{height:300 , width:300 , backgroundColor: color}}>
      <Button
        title="Add a Colour"
        onPress={() => {
            setColor( randomRgb());
          //console.log("Button Pressed");
        }}
      />
      
    </View>
    );
};


const randomRgb=() => {
    const red=Math.floor(Math.random() * 256);
    const green=Math.floor(Math.random() * 256);
    const blue=Math.floor(Math.random() * 256);
    
    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});
export default ColorScreen;
