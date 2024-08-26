import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AxioAPI from '../api/AxioAPI';
import SearchBar from '../components/SearchBar';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    // console.log(results);

    const searchApi =  async() => {
        const response=await AxioAPI.get('/search',{
            params:{
                limit:50,
                term,
                location:'san jose'
            }
        
        });
        setResults(response.data.businesses);
    }

    return (
        <View >
            <SearchBar
                term={term}
                // onTermChange={newTerm => setTerm(newTerm)}
                onTermChange={setTerm}
                // onTermSubmit={() => console.log("The term was Submitted")}
                // onTermSubmit={() => searchApi()}
                onTermSubmit={searchApi}
                
            />
            <Text>Search Screen </Text>
            <Text>We have found {results.length} results</Text>
        </View>
    );
}

const styles = StyleSheet.create({


});

export default SearchScreen;
