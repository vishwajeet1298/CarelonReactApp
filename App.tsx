import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import CarelonHeader from "./src/components/CarelonHeader";
import Login from "./src/components/Login";
import { UserProvider } from './src/components/UserContext';
import Carelon from './src/screens/Carelon';
import ComponentsScreen from "./src/screens/ComponentsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import Intro from "./src/screens/Intro";
import ProductListingScreen from './src/screens/ProductListingScreen';
import ProductsSearch from './src/screens/ProductsSearch';
import ProviderSearch from "./src/screens/ProviderSearch";
import Search from './src/screens/Search';
import WelcomeScreen from "./src/screens/WelcomeScreen";



const App = () => {
    const Stack = createStackNavigator();
    const [user, setUser] = useState(null);
    return (
        <UserProvider value={{ user, setUser }}>
            <NavigationContainer>

                <Stack.Navigator initialRouteName="Provider">
                    <Stack.Screen name="Carelon" component={Carelon} />
                    <Stack.Screen name="Search" component={Search} />
                    <Stack.Screen name="Products" component={ProductListingScreen} />
                    <Stack.Screen name='ProductsSearch' component={ProductsSearch} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Components" component={ComponentsScreen} />
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                    <Stack.Screen name="Intro" component={Intro} />
                    <Stack.Screen name="CarelonHeader" component={CarelonHeader} options={{ headerShown: false }} />
                    <Stack.Screen name="Provider" component={ProviderSearch} options={{ headerShown: false }} />


                </Stack.Navigator>

            </NavigationContainer>
        </UserProvider>

    );
}

const styles = StyleSheet.create({

});

export default App;
