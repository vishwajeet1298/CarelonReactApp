import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import arrowIcon from '../../assets/icons/Arrow.png';
import avatarIcon from '../../assets/icons/Avatar.png';

const SidePanel = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    return (
        <View style={styles.panel}
            testID="side-panel">

            <View style={styles.header}>                
                <Image source={avatarIcon} style={styles.avatar} testID="avatar" />
                <View style={styles.userSignInView}>
                <Text style={styles.signInText}>Sign In</Text>
                <TouchableOpacity>
                <Text style={styles.createAccountText}>Create an account</Text>
                </TouchableOpacity>
                </View>                
                <View style={styles.closeButtonView}>
                    <TouchableOpacity onPress={onClose} testID="close-button">
                        <Text style={styles.closeButtonText}>x</Text>
                    </TouchableOpacity>
                </View>

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
const colors = {
    primary: '#794CFF',
    secondary: '#231E33',
    background: '#F5F5F5',
    border: '#ccc',
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
    },
    header: {      
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 10,
        padding: 10,     
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        
    },
    userSignInView:{
        marginLeft:10,
        flex:1
    },
    signInText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.secondary,
    },
    createAccountText: {
        fontSize: 14,
        color: colors.primary,
    },
    closeButtonView: {
        backgroundColor: colors.background,
        marginRight:10,
        borderRadius: 20,
        width: 40, 
        height: 40, 
    },
    closeButtonText:{
        color: colors.secondary,
        fontSize: 24,
        textAlign:'center',
        lineHeight:40,        
    },
    menuItem: {
        paddingHorizontal:15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,        
        borderTopColor:colors.border,
        borderTopWidth:1,
        borderBottomColor:colors.border,
        borderBottomWidth:1
,    },
    menuText: {
        fontSize: 14,
        color: colors.secondary,
        fontWeight:'500'
    },
    arrow: {
        width: 16,
    },
});

export default SidePanel;
