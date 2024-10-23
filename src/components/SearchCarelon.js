import React, { useState } from 'react';
import { FlatList, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

const SearchCarelon = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [pressedItem, setPressedItem] = useState(null);
    const [term, setTerm] = useState('');


    const toggleModal = (item) => {
        console.log('Item selected:', item);
        setSelectedItem(item);
        setModalVisible(!isModalVisible);
        console.log('Modal visibility:', !isModalVisible);
    };
    
    const data = ['Home', 'Dept. of Homeland Security', 'Security Provision', 'Resources and Facilities Management', 'Dept. of Health and Human Services',];

    const filteredData = data.filter(item => {
        return item.toLowerCase().includes(term.toLowerCase());
    });
    
    const renderModalContent = () => {
        switch (selectedItem) {
            case 'Home':
                return (
                    <View style={styles.modalMain}>
                        <View style={styles.modalHeaderView}>
                            <Text style={styles.modalHeaderText}>Organization Confirmation</Text>
                        </View>
                        <View style={styles.modalImageView}>
                            <Image source={require('../../assets/images/Home_Depot.png')} style={styles.modalImage} />
                        </View>
                        <View style={styles.modalContent}>
                            <Text style={styles.selectedItemText}>{selectedItem}</Text>
                            <Text style={styles.confirmationText}>Please confirm that this is the organization you currently belong to.</Text>
                        </View>
                        <View style={styles.modalButtonView}>
                            <TouchableOpacity style={styles.gobackbtn} onPress={toggleModal}>
                                <Text style={styles.gobackbtntext}>Go Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.continuebtn}>
                                <Text style={styles.continuebtntext}>Continue</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                );
            case 'Dept. of Homeland Security':
                return (
                    <View style={styles.modalMain}>
                        <View style={styles.modalHeaderView}>
                            <Text style={styles.modalHeaderText}>Organization Confirmation</Text>
                        </View>
                        <View style={styles.modalImageView}>
                            <Image source={require('../../assets/images/Homeland_Security.png')} style={styles.modalImage} />
                        </View>
                        <View style={styles.modalContent}>
                            <Text style={styles.selectedItemText}>{selectedItem}</Text>
                            <Text style={styles.confirmationText}>Please confirm that this is the organization you currently belong to.</Text>
                        </View>
                        <View style={styles.modalButtonView}>
                            <TouchableOpacity style={styles.gobackbtn} onPress={toggleModal}>
                                <Text style={styles.gobackbtntext}>Go Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.continuebtn}>
                                <Text style={styles.continuebtntext}>Continue</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                );
            case 'Security Provision':
                return (
                    <View style={styles.modalMain}>
                        <View style={styles.modalHeaderView}>
                            <Text style={styles.modalHeaderText}>Organization Confirmation</Text>
                        </View>
                        <View style={styles.modalImageView}>
                            <Image source={require('../../assets/images/Home_Depot.png')} style={styles.modalImage} />
                        </View>
                        <View style={styles.modalContent}>
                            <Text style={styles.selectedItemText}>{selectedItem}</Text>
                            <Text style={styles.confirmationText}>Please confirm that this is the organization you currently belong to.</Text>
                        </View>
                        <View style={styles.modalButtonView}>
                            <TouchableOpacity style={styles.gobackbtn} onPress={toggleModal}>
                                <Text style={styles.gobackbtntext}>Go Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.continuebtn}>
                                <Text style={styles.continuebtntext}>Continue</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                );
            case 'Resources and Facilities Management':
                return (
                    <View style={styles.modalMain}>
                        <View style={styles.modalHeaderView}>
                            <Text style={styles.modalHeaderText}>Organization Confirmation</Text>
                        </View>
                        <View style={styles.modalImageView}>
                            <Image source={require('../../assets/images/Homeland_Security.png')} style={styles.modalImage} />
                        </View>
                        <View style={styles.modalContent}>
                            <Text style={styles.selectedItemText}>{selectedItem}</Text>
                            <Text style={styles.confirmationText}>Please confirm that this is the organization you currently belong to.</Text>
                        </View>
                        <View style={styles.modalButtonView}>
                            <TouchableOpacity style={styles.gobackbtn} onPress={toggleModal}>
                                <Text style={styles.gobackbtntext}>Go Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.continuebtn}>
                                <Text style={styles.continuebtntext}>Continue</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                );

            case 'Dept. of Health and Human Services':
                return (
                    <View style={styles.modalMain}>
                        <View style={styles.modalHeaderView}>
                            <Text style={styles.modalHeaderText}>Organization Confirmation</Text>
                        </View>
                        <View style={styles.modalImageView}>
                            <Image source={require('../../assets/images/Home_Depot.png')} style={styles.modalImage} />
                        </View>
                        <View style={styles.modalContent}>
                            <Text style={styles.selectedItemText}>{selectedItem}</Text>
                            <Text style={styles.confirmationText}>Please confirm that this is the organization you currently belong to.</Text>
                        </View>
                        <View style={styles.modalButtonView}>
                            <TouchableOpacity style={styles.gobackbtn} onPress={toggleModal}>
                                <Text style={styles.gobackbtntext}>Go Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.continuebtn}>
                                <Text style={styles.continuebtntext}>Continue</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                );
            default:
                return null;
        }
    };
    const handleItemPress = (item) => {
        toggleModal(item);
    }
    const handlePressIn = (item) => {
        setPressedItem(item);
    };

    const handlePressOut = () => {
        setPressedItem(null);
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'android' ? 'height' : 'padding'}>

            <View style={styles.viewStyle}>
                <Text style={styles.bannerText}>To get started, enter the exact name of your organization, without punctuation.</Text>
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
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPressIn={() => handlePressIn(item)}
                                onPressOut={handlePressOut}
                                onPress={() => handleItemPress(item)}
                            >
                                <Text style={[styles.itemStyle, item === pressedItem && styles.pressedItemStyle]}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                )}
            </View>
            <Modal
                isVisible={isModalVisible}
                onBackdropPress={toggleModal}
                style={styles.bottomModal}
                testID="modal"
            >
                {renderModalContent()}
            </Modal>
        </KeyboardAvoidingView>




    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewStyle: {
        padding: 10,
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        
    },
    bannerText: {
        fontSize: 14,
        lineHeight: 20,
        marginTop: 5,
        color: '#333333',
        textAlign: 'center',
    },
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        height: 45,
        borderRadius: 8,
        marginHorizontal: 10,
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#DDDDDD',
       
    },
    inputStyle: {
        flex: 1,
        fontSize: 16,
    },

    flatListStyle: {
        marginTop: 5,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    pressedItemStyle: {
        backgroundColor: '#C2B3E6',
    },
    itemStyle: {
        fontSize: 18,
        lineHeight: 24,
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginBottom: 2,
        borderRadius: 5,
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalHeaderView: {
        borderBottomWidth: 1,
        borderBottomColor: '#F5F5F5',
        justifyContent: 'center',
        height: '15%',
    },
    modalMain: {
        backgroundColor: 'white',
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        padding: 20,
    },
    modalHeaderText: {
        fontSize: 18,
        marginBottom: 12,
        textAlign: "center",
        fontWeight: '600',
        color: '#231E33',
    },
    modalImageView: {
        padding: 20,
        alignItems: 'center',
    },
    modalImage: {
        width: 85,
        height: 85,
    },
    modalContent: {
        marginHorizontal: 50,
        alignItems: 'center',
        padding: 10,
    },
    selectedItemText: {
        textAlign: 'center',
        fontWeight: '600',
        width: '80%',
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 24,
        color: '#231E33',
    },
    confirmationText: {
        textAlign: 'center',
        width: '90%',
        fontSize: 14,
        color: '#231E33',
        marginVertical: 10,
    },
    modalButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 50,
        padding: 10,
    },

    gobackbtn: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderWidth: 1,
        borderColor: '#5009B5',
        margin: 10,
        width: 130,
        borderRadius: 20,

    },
    gobackbtntext: {
        color: '#794CFF',
        textAlign: 'center',

    },
    continuebtn: {
        backgroundColor: '#794CFF',
        padding: 10,
        borderWidth: 1,
        margin: 10,
        width: 130,
        borderRadius: 20,

    },
    continuebtntext: {
        color: '#FFFFFF',
        textAlign: 'center',
    },


});

export default SearchCarelon;