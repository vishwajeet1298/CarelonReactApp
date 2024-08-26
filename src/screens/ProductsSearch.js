import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';

const ProductsSearch = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const URL = "https://fakestoreapi.com/products";
        fetch(URL)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Something went wrong');
                }
                return res.json();
            }).then((data) => {
                setProducts(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    // useEffect(() => {
    //     if (searchTerm === '') {
    //         setFilteredProducts(products);
    //     } else {
    //         setFilteredProducts(products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase())));
    //     }
    // }, [searchTerm, products]);
    useEffect(() => {
        if (searchTerm === '') {
            setFilteredProducts(products);
        } else {

            const newFilteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

            setFilteredProducts(newFilteredProducts);
            
            if (newFilteredProducts.length === 0) {
                setError('No Results Found');
            } else {
                setError(null);
            }
        }
    }, [searchTerm, products]);

    return (
        <View>
            <TextInput
                style={styles.inputStyle}
                value={searchTerm}
                placeholder="Search..."
                onChangeText={setSearchTerm}
            />
            <Text style={styles.textStyle}>ProductListingScreen</Text>
            {
                isLoading ? (<ActivityIndicator size="large" color="#00ff00" />)
                    : error ? (<Text style={styles.errorStyle}>{error}</Text>) :
                        (
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={filteredProducts}
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
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        margin: 5,
    },
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
    imageStyle: {
        height: 350,
        width: 300,
    },
    errorStyle: {
        fontSize: 15,
        textAlign: 'center',
        color: 'red'
    }
})

export default ProductsSearch;
