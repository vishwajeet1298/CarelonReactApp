import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

const SearchCarelon = () => {
    const [term, setTerm] = useState('');
   
    const data = ['Home', 'Dept. of Homeland Security', 'Security Provision', 'Resources and Facilities Management', 'Dept. of Health and Human Services',];

    const filteredData = data.filter(item => {
        return item.toLowerCase().includes(term.toLowerCase());
    });


    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS==='android'?'height':'padding'}>
        
        <View style={styles.viewStyle}>
            <Text style={styles.bannerText}>To get started, enter the exact name of your organization, without punctuation.</Text>
            <View style={styles.backgroundStyle}>
                <TextInput style={styles.inputStyle}
                    placeholder="Search"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={term}
                    onChangeText={setTerm}
                />
            </View>
            
           {term !== '' && (
                <FlatList
                style={styles.flatListStyle}
                    data={filteredData}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => {
                        
                        return <Text style={styles.itemStyle}>{item}</Text>
                    }}
                />
                
            )} 
        </View>
        </KeyboardAvoidingView>
        


    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        //  justifyContent:'center',
        // justifyContent:'flex-end',

    },
    viewStyle: {
        // marginHorizontal: 5,
        padding: 10,
        backgroundColor: '#C0C0C0',
        borderRadius: 10,
    },
    bannerText:{
        fontSize: 14,
        lineHeight: 20,
        marginTop: 5,
        color: '#333333',
    },
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        height: 40,
        borderRadius: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        
    },
    inputStyle: {
        // borderColor:'black',
        // borderWidth:1,
        flex: 1,
        fontSize: 16,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
    },
    flatListStyle:{
        marginTop:5,
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        marginHorizontal:10,
        // padding:5,
    },
    itemStyle: {
        fontSize: 18,
        lineHeight:24,
        backgroundColor:'#F0F0F0',
        padding:10,
        marginBottom: 2,
        borderRadius: 5,
        
    },
    


});

export default SearchCarelon;
