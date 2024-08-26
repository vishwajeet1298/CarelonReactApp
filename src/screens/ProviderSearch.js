import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import homeIcon from '../../assets/icons/Home.png';
import medicationIcon from '../../assets/icons/Medication.png';
import menuIcon from '../../assets/icons/Menu.png';
import ordersIcon from '../../assets/icons/Orders.png';
import resourcesIcon from '../../assets/icons/Resources.png';
import CarelonHeader from '../components/CarelonHeader';
import SidePanel from '../components/SidePanel';
import Carelon from './Carelon';
import ComponentsScreen from './ComponentsScreen';
import FindCounselor from './FindCounselor';
import ImageScreen from './ImageScreen';
import ListScreen from './ListScreen';

const Tab = createBottomTabNavigator();
const renderCarelonHeader = () => <CarelonHeader />;
const ProviderSearch = () => {
    const [isPanelVisible, setPanelVisible] = useState(false);

    const handleTabPress = (routeName) => {
        if (routeName === 'Menu') {
            setPanelVisible(true);
        }
    };

    return (
<View style={{ flex: 1 }}>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
                tabBarStyle: { position: 'absolute', bottom: 0,backgroundColor: '#f8f8f8' },
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = homeIcon;
                            break;
                        case 'Services':
                            iconName = medicationIcon;
                            break;
                        case 'Menu':
                            iconName = menuIcon;
                            break;
                        case 'Providers':
                            iconName = resourcesIcon;
                            break;
                        case 'Resources':
                            iconName = ordersIcon;
                            break;
                        default:
                            return null;

                            
                    }
                    return (
                        <Image
                            source={iconName}
                            style={[
                                styles.icon,
                                focused ? styles.iconFocused : styles.iconUnfocused,
                            ]}
                        />
                    );
                },

            })}
            screenListeners={({ route }) => ({
                tabPress: () => handleTabPress(route.name),
            })}
        >
            <Tab.Screen name="Home" component={FindCounselor} options={{ header: renderCarelonHeader }} />
            <Tab.Screen name="Services" component={ImageScreen} options={{ header: renderCarelonHeader}} />
            <Tab.Screen name="Providers" component={Carelon} options={{ header: renderCarelonHeader  }} />
            <Tab.Screen name="Resources" component={ComponentsScreen} options={{ header: renderCarelonHeader}} />
            <Tab.Screen name="Menu" component={ListScreen} options={{ header: renderCarelonHeader}} />
        </Tab.Navigator>
        <SidePanel isVisible={isPanelVisible} onClose={() => setPanelVisible(false)} />
        </View>

    );
}
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
        // padding: 10,
    },
    iconFocused: {
        tintColor: '#794CFF',
    },
    iconUnfocused: {
        tintColor: 'gray',
    },
});

export default ProviderSearch;
