import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";

const ListScreen = () => {
    const friends = [
        {name:"Alka", age:20},
        {name:"Aneesh", age:21},
        {name:"Ankush", age:22},
        {name:"Anshul", age:23},
        {name:"Anshika", age:24},
        {name:"Bhawna", age:25},
    ];

    return (
        <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({item}) => {
                return (
                    <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>                    
                );
            }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;
