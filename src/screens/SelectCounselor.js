import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// const counselorname="Lenora McCormick"
const phoneCall = "(800)370-3651 / (800)370-3652 0";
const address = "1028 Tatu Trail, Hampton, SC, 29924";
const webaddress = "www.jennwaiter.com/connect";
const SelectCounselor = () => {
    return (
        <ScrollView>
            <Text style={styles.counselorselect}>Select a counselor</Text>
            <View style={styles.MainCardView}>
                <View style={styles.counselorsView}>
                    <Text style={styles.counselortitle}>Lenora McCormick
                    </Text>
                    <Text style={styles.counselordistance}>21 miles
                    </Text>
                </View>
                <View style={styles.counselordescription}>
                    <Text style={styles.designation}>M.D. PHD</Text>
                    <Text style={styles.speciality}>Mental health Specialist</Text>
                </View>
                <View style={styles.services}>
                    <Text style={styles.service1}>Accepting new patients
                    </Text>
                    <Text style={styles.service2}>Virtual Counselor
                    </Text>
                </View>
                <View style={styles.contactdetailsView}>
                    <Text style={styles.contactDetailsHeader}>Contact Details</Text>
                    <TouchableOpacity>
                        <Text style={styles.contactDetails}>{phoneCall}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.contactDetails}>{address}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.contactDetails}>{webaddress}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.operationHours}>Hours of Operation</Text>
            </View>


        </ScrollView>
    )
}
const styles = StyleSheet.create({
    MainCardView: {
        flex: 1,
        borderWidth: 5,
        borderRadius: 14,
        padding: 10,
    },
    counselorselect: {
        padding: 10,
        fontWeight: "700",
        fontSize: 24,
    },
    counselorsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    counselortitle: {
        color: '#5009B5',
        fontSize: 18,
    },
    counselordistance: {
        backgroundColor: '#CCCCCC',
        borderRadius: 12,
        padding: 5,
        width: '20%',
        textAlign: 'center',
        fontSize: 12,
    },
    counselordescription: {
        borderBottomColor: '#EEEEEE',
        borderBottomWidth: 3,
    },
    designation: {
        color: '#231E33',
        fontSize: 14,
    },
    speciality: {
        color: '#666666',
        marginBottom: 10,
    },
    services: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderBottomWidth: 3,
        marginTop: 10,
        marginBottom: 10,
        borderBottomColor: '#EEEEEE'
    },
    service1: {
        backgroundColor: '#CCCCCC',
        borderRadius: 16,
        padding: 8,
        textAlign: 'center',
        marginBottom: 10,
    },
    service2: {
        backgroundColor: '#CCCCCC',
        borderRadius: 16,
        padding: 8,
        textAlign: 'center',
        marginBottom: 10,
    },
    contactDetailsHeader: {
        fontSize: 16,
        fontWeight: "700",
    },
    contactdetailsView: {
        borderBottomWidth: 3,
        borderBottomColor: '#EEEEEE'
    },
    contactDetails:{
        marginBottom:5,
    },
    operationHours:
    {
        fontSize:16,
        fontWeight:"600",
        marginTop:10,
    }



})

export default SelectCounselor