
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const FlatListSearch=()=>{
  const [filteredData, setfilteredData]=useState([]);
  const [masterData,setmasterData]=useState([]);

  useEffect(()=>{
    fetchPosts();
    return()=>{

    }
  },[])

const fetchPosts=()=>{
  const apiURL='https://jsonplaceholder.typicode.com/posts';
  fetch(apiURL)
  .then((response)=>response.json())
  .then((responseJson)=>{
    setfilteredData(responseJson);
    setmasterData(responseJson);

  }).catch((error)=>{
    console.error(error);
  })
}

const ItemView=({item})=>{
  return (
    <Text style={styles.itemStyle}>
    {item.id}{'. '}{item.title.toUpperCase()}
    </Text>
  )
}

const ItemSeparatorView=()=>{
  return(
    <View
    style={{height:0.5,width:'100%',backgroundColor:'#c8c8c8'}}>
    </View>

  )
}
  return(
    <View style={styles.container}>
    <FlatList
    data={filteredData}
    keyExtractor={(item,index)=>index.toString()}
    ItemSeparatorComponent={ItemSeparatorView}
    renderItem={ItemView}

     />
    
  </View>

  )
  
};
const styles = StyleSheet.create({

container:{
  backgroundColor:'white',
},
itemStyle:{
  padding:15,
}
    
});


export default FlatListSearch;