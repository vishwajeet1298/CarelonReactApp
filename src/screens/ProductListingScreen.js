import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';

const ProductListingScreen = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProducts();
    }, []);


    const getProducts = () => {
        //    console.log("Get Products");
        const URL = "https://fakestoreapi.com/products";
        //    const URL="https://api.yelp.com/v3/businesses"
        // const URL="https://api.restful-api.dev/objects;"
        fetch(URL)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Something went wrong');
                }
                return res.json();

            })
            // .then((data) => {
            //     setProducts(data);
            //     setIsLoading(false);
            //     console.log(data);
            // })
            .then((json)=>{
                setProducts(json);
                setIsLoading(false);
                console.log(json)
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
                isLoading ? (<ActivityIndicator size="large" color="#00ff00" />)
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

export default ProductListingScreen;