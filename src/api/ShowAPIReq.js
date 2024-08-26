
//PART 1  -- Importing Libraries

import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

//PART 2 -- Creating a Component
const ShowAPIReq = () => {

    useEffect(()=>{
        getData();

    },[]);
    const getData=async()=>{
        // const res=await myFetchGetRequest();
        const res=await myFetchPostRequest();
        console.log('data',res);
    }
   

    return (
        <View>
            <Text>Show API Requests!</Text>
        </View>

    );
};

//PART 3 -- Styling the Component
const styles = StyleSheet.create({
    
});


//PART 4 -- Exporting the Component
export default ShowAPIReq;