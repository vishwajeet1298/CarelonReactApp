import React from 'react';
import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SearchCarelon from '../components/SearchCarelon';


const HeroText = ({ text, style }) => <Text style={style}>{text}</Text>;

const DescriptionText = ({ text, style }) => <Text style={style}>{text}</Text>;

const Search = () => {
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS==='android'?'height':'padding'}>
        <View style={styles.mainScreen}>
            <View style={styles.hero}>
            <HeroText text="Welcome to" style={styles.heroText} />
                <HeroText text="Carelon Wellbeing" style={styles.heroText2} /></View>
            <View style={styles.viewContent}>
            <DescriptionText text="Explore counseling, wellness, work-life balance, legal, and financial resources." style={styles.description} />
                <DescriptionText text="Carelon Wellbeing is confidential and available to you and members of your household at no cost." style={styles.description2} />
                </View>
            <View style={styles.imgView}>
                {/* <ImageBackground
                    source={require('../../assets/images/parentwithchild.jpg')}
                    style={styles.imgStyle}
                /> */}
                <Image
                source={require('../../assets/images/parentwithchild.jpg')}
                style={styles.imgStyle}
                />
                
                <View style={styles.searchBarContainer}>

                    <SearchCarelon 
                        
                    />
                </View>
                
                
                
            </View>
            <View style={styles.signInView}>
                <Text>{"Already have an account? "}</Text>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={{ color: '#794CFF', textDecorationLine: 'underline', }}>
                        {"Sign in"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        justifyContent:'flex-end',

    },
    mainScreen: {
        // flex:1,
        
        marginHorizontal:20,

    },
    hero: {
        backgroundColor: '#f3f3f3',
        // height: 100,
        justifyContent: 'center',
        // alignItems: 'flex-start',
        lineHeight: 24,
    },
    heroText:
    {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    heroText2: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#5009B5",
    
    },
    viewContent: {
        backgroundColor: '#f3f3f3',
        // height: 100,
        alignItems: 'flex-start',
        lineHeight: 24,
    },
    description: {
        fontSize: 14,
        color: '#333333',
        letterSpacing: 0.8,
        marginTop: 30,
        marginBottom: 20,
        fontFamily:'OpenSans-Medium',
        
    },
    description2: {
        fontSize: 14,
        color: 'black',
        letterSpacing: 0.8,
        marginBottom: 20,
        color:"#5009B5", 
        fontFamily:'OpenSans-Medium',
    },
    imgView: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 24,
        marginHorizontal:10,
        
        
    },
    imgStyle: {
        width: '100%',
        height: 400,
        resizeMode: 'cover',
        borderRadius: 24,
    },
    signInView: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
        justifyContent: 'center',
    },
    searchBarContainer: {
        position: 'absolute', 
        top: 180, 
        padding:5,
    },



});

export default Search;