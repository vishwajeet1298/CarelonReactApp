import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';

const AxioListing = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getProducts();
    }, []);


    const getProducts = () => {
        const URL = "https://fakestoreapi.com/products";
        axios.get(URL)
            .then((response) => {
                setProducts(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                console.log(error.message);
            });
    };


    return (
        <View>
            <Text style={styles.textStyle}>ProductListingScreen</Text>
            {
                isLoading ? (<ActivityIndicator size="large" color="red" />)
                    : error ? (<Text style={styles.errorStyle}>{error}</Text>) :
                        (
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={products}
                                renderItem={({ item }) => (
                                    <View style={styles.viewStyle}>
                                        <Image style={styles.imageStyle}
                                            source={{ uri: item.image }}
                                        />
                                        <Text style={styles.textStyle}>{item.title}</Text>
                                        <Text style={{ fontSize: 12, textAlign: 'center' }}>$ {item.price}</Text>

                                    </View>
                                )}
                            />
                        )

            }



        </View>
    );
};



const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 15,
    },
    textStyle: {
        fontSize: 16,
        textAlign: 'center',

    },
    imageStyle:
    {
        height: 350,
        width: 300,
    },
    errorStyle:{
        fontSize: 15,
        textAlign: 'center',
        color:'red'
    }
})

export default AxioListing;