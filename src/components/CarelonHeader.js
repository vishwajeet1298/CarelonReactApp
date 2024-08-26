import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

const externalURL = 'https://google.com';
const CarelonHeader = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Image
                    style={styles.logoStyle}
                    source={require('../../assets/logo.png')}
                    testID="logo"
                />
                <View style={styles.sideOps}>
                    <TouchableOpacity style={styles.loginButton} testID="loginButton">
                        <Text style={styles.loginText}>Log In</Text>
                    </TouchableOpacity>
                    <Image
                        style={styles.iconStyle}
                        source={require('../../assets/icons/Search.png')}
                        testID="searchIcon"
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.assistanceButton} onPress={toggleModal} testID="assistanceButton">
                <Text style={styles.assistanceText}>Get Immediate Assistance</Text>
            </TouchableOpacity>
            <Modal
                isVisible={isModalVisible}
                onBackdropPress={toggleModal}
                style={styles.bottomModal}
                testID="modal"
            >
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>Get Immediate Assistance Content</Text>

                    <TouchableOpacity style={styles.modalMenuItem}>
                        <Text style={styles.modalMenuText}>2 miles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalMenuItem}>
                        <Text style={styles.modalMenuText}>5 miles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalMenuItem}>
                        <Text style={styles.modalMenuText}>10 miles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalMenuItem}>
                        <Text style={styles.modalMenuText}>25 miles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalMenuItem}>
                        <Text style={styles.modalMenuText}>50 miles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.resultsButton}>
                        <Text style={styles.resultsButtonText}>Show Results</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    headerView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 60,

    },
    logoStyle: {

        resizeMode: 'contain',
    },
    sideOps: {
        flexDirection: "row",
        alignItems: "center",

    },
    loginButton: {
        marginRight: 10,
    },
    loginText: {
        fontSize: 16,
        color: "black",
    },
    iconStyle: {
        width: 24,
        // height: 24,
        resizeMode: 'contain',
    },
    assistanceButton: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        borderColor: "#794CFF",
        borderWidth: 2,
        marginHorizontal: 20,
    },
    assistanceText: {
        fontSize: 14,
        textAlign: 'center',
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 12,
        textAlign: "center",
    },
    modalMenuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },
    modalMenuText: {
        fontSize: 12,
        color: '#231E33',
    },
    resultsButton: {
        backgroundColor: "#794CFF",
        padding: 10,
        borderRadius: 20,
        width: 150,
        alignItems: "center",
        alignSelf: "center",
        marginTop: 20,
    },
    resultsButtonText: {
        color: "#FFFFFF",
        fontWeight: "600",
    },
});

export default CarelonHeader;
