import { Feather } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchBar=({term,onTermChange,onTermSubmit})=> {
  return (
    <View style={styles.backgroundStyle}>
    <Feather name="search" size="{30}" style={styles.iconStyle} />
    <TextInput style={styles.inputStyle}
    placeholder="Search"
    autoCapitalize="none"
    autoCorrect={false}
    value={term}
    onChangeText={newTerm=>onTermChange(newTerm)}
    // onEndEditing={()=>console.log("Submitted")}
    onEndEditing={()=>onTermSubmit()}
     /> 
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle:{
    marginTop:10,
    backgroundColor:'#F0EEEE',
    height:50,
    borderRadius:5,
    marginHorizontal:15,
    flexDirection:'row',
    // alignItems:'center'
    
  },
  inputStyle:{
    // borderColor:'black',
    // borderWidth:1,
    flex:1,
    fontSize:18,
  },
  iconStyle:{
    fontSize:35,
    alignSelf:'center',
  }
  
  
});

export default SearchBar;
