import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import arrowIcon from '../../assets/icons/Arrow.png';
import avatarIcon from '../../assets/icons/Avatar.png';

const SidePanel = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    return (
        <View style={styles.panel}
        testID="side-panel">
            <TouchableOpacity onPress={onClose} testID="close-button">
                <Text style={styles.closeButton}>x</Text>
            </TouchableOpacity>
            <View style={styles.header}>
                <Image source={avatarIcon} style={styles.avatar} testID="avatar" />
                <Text style={styles.signInText}>Sign In</Text>
                <Text style={styles.createAccountText}>Create an account</Text>
            </View>
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Find a Provider</Text>
                <Image source={arrowIcon} style={styles.arrow} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Services</Text>
                <Image source={arrowIcon} style={styles.arrow} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Care</Text>
                <Image source={arrowIcon} style={styles.arrow} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Wellbeing Content</Text>
                <Image source={arrowIcon} style={styles.arrow} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Forms and Documents</Text>
                <Image source={arrowIcon} style={styles.arrow} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Contact Us</Text>
                <Image source={arrowIcon} style={styles.arrow} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    panel: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '92%',
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
    },
    closeButton: {
        alignSelf: 'flex-end',
        color: 'blue',
        fontSize: 24,
    },
    header: {
        marginBottom: 20,
        
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 10,
    },
    signInText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    createAccountText: {
        fontSize: 14,
        color: 'blue',
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    menuText: {
        fontSize: 16,
        color: '#231E33',
    },
    arrow: {
        width: 20,
        height: 20,
    },
});

export default SidePanel;
