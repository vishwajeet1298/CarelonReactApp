import React, { useState } from 'react';
import {
    FlatList,
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const KeyboardAvoidingComponent = () => {
const HeroText = ({ text, style }) => <Text style={style}>{text}</Text>;
const DescriptionText = ({ text, style }) => <Text style={style}>{text}</Text>;

const [term, setTerm] = useState('');

    const data = ['Home', 'Dept. of Homeland Security', 'Security Provision',
        'Resources and Facilities Management', 'Dept. of Health and Human Services'];

    const filteredData = data.filter(item => {
        return item.toLowerCase().includes(term.toLowerCase());
    });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      
       <View style={styles.inner}>
                <View style={styles.hero}>
                    <HeroText text="Welcome to" style={styles.heroText} />
                    <HeroText text="Carelon Wellbeing" style={styles.heroText2} />
                </View>
                <View style={styles.viewContent}>
                    <DescriptionText text="Explore counseling, wellness, work-life balance, legal, and financial resources." style={styles.description} />
                    <DescriptionText text="Carelon Wellbeing is confidential and available to you and members of your household at no cost." style={styles.description2} />
                </View>
                <View style={styles.imgView}>
                <Image
                source={require('../../assets/images/parentwithchild.jpg')}
                style={styles.imgStyle}
                />
                    

                    <View style={styles.searchBarContainer}>
                        <Text style={styles.bannerText}>To get started, enter the exact name of your organization, without punctuation.
                        </Text>
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
            


      
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    justifyContent:'flex-end',
    
    
  },
  inner: {
    // flex: 1,
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

searchBarContainer: {
    position: 'absolute', 
    // top: 180, 
    padding:5,
    backgroundColor:'grey',
    borderRadius:10,
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
signInView: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30,
    justifyContent: 'center',
},
  
});

export default KeyboardAvoidingComponent;