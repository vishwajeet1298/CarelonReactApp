import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";


//we can also use props.navigation.navigate('Components') instead of navigation.navigate('Components') but props need to be passed in the function
const HomeScreen = ({ route, navigation }) => {
    
    // const { user } = route.params;
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>HomeScreen</Text> 
      <Button
        title="Click here to Go to Components Screen"
        onPress={()=>props.navigation.navigate('Components')}
      />
      <View style={styles.receiveDataView}>
      {/* <Text>Welcome {JSON.stringify(user.username)}.Your Password is {JSON.stringify(user.password)}</Text> */}
    </View>

         </View>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  viewStyle:
  {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  receiveDataView:
  {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default HomeScreen;
