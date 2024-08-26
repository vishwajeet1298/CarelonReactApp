import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Linking, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const externalURL = 'https://www.wikipedia.org';
const FindCounselor = () => {
    const [selectedId, setSelectedId] = useState(null);
    const locationData = [
        { id: '1', title: 'Gurugram' },
        { id: '2', title: 'Bengaluru' },
        { id: '3', title: 'Seattle, WA, USA' },
        { id: '4', title: 'Hyderabad' },
    ];
    const [nameOrSpeciality, setNameOrSpeciality] = useState('');
    const [location, setLocation] = useState('');
    const [showList, setShowList] = useState(false);
    const heroText = "[counselor]";
    const heroDesc = "Connect with a licensed counselor.";
    const footDesc = "Provider Search is a Carelon Behavioral Health (Carelon) online directory tool for locating providers and offers you the ability to locate network providers and the aility to locate network providers";
    const isSearchEnabled = nameOrSpeciality && location;
    return (
        <View style={styles.container}>
            <View style={styles.heroView}>
                <Text style={styles.heroTextStyle}>Find a {heroText}</Text>
                <Text style={styles.heroDescStyle}>{heroDesc}</Text>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
                <View style={styles.container2}>
                    <Text style={styles.inputLabel}>Name or Speciality</Text>
                    <TextInput style={styles.inputStyle}
                        placeholder='Search'
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={nameOrSpeciality}
                        onChangeText={setNameOrSpeciality}
                    />
                    <Text style={styles.inputLabel}>Location</Text>
                    <TextInput style={styles.inputStyle}
                        placeholder='ZIP Code, city, address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={location}
                        onChangeText={(text) => {
                            setLocation(text);
                            setShowList(true);
                        }}
                    />
                    {showList&&location ? (
                        <FlatList
                            style={styles.flatListStyle}
                            data={locationData.filter(item => item.title.toLowerCase().includes(location.toLowerCase()))}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => {
                                const backgroundColor = item.id === selectedId ? '#EBE4FF' : '#FFFFFF';
                                return (
                                    <TouchableOpacity
                                    onPress={() => {
                                        setSelectedId(item.id);
                                        setLocation(item.title);
                                        setShowList(false);
                                    }} 
                                    style={[styles.item, { backgroundColor }]}
                                >
                                    <Text style={styles.itemStyle}>{item.title}</Text>
                                </TouchableOpacity>
                                )
                            }}
                        extraData={selectedId}
                        />
                    ) : null}
                    <TouchableOpacity 
                        style={[styles.searchButton, { backgroundColor: isSearchEnabled ? '#794CFF' : '#CCCCCC' }]}
                        disabled={!isSearchEnabled}
                    >
                        <Text style={styles.searchButtonText}>Search</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.description}>{footDesc}{' '}
                        <Text style={styles.learnMore}
                            onPress={() => Linking.openURL(externalURL)}>Learn more.</Text>
                    </Text>
                </View>

                {/* </ScrollView> */}

            </KeyboardAvoidingView>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    heroView: {
        padding: 15,
        marginTop: 10,
    },
    heroTextStyle: {
        fontSize: 24,
        fontWeight: '600',
        color: "#333333",
        marginBottom: 10,
    },
    heroDescStyle: {
        color: "#231E33",
    },
    container2: {
        backgroundColor: "#F5F5F5",
        justifyContent: "center",
        padding: 20,
        borderRadius: 20,
        marginHorizontal: 20,
    },
    inputLabel: {
        color: '#231E33',
        marginBottom: 5,
        marginTop: 10,
    },
    inputStyle: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 1,
        backgroundColor: "#FFFFFF",
        padding: 10,
        borderRadius: 12,
    },
    flatListStyle: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    itemStyle: {
        fontSize: 16,
        lineHeight: 24,
        padding: 10,
        marginBottom: 2,
        borderRadius: 5,
        // backgroundColor:"#EBE4FF",
    },
    searchButton: {
        backgroundColor: "#CCCCCC",
        padding: 10,
        borderRadius: 20,
        width: 150,
        alignItems: "center",
        alignSelf: "center",
        marginTop: 10,
    },
    searchButtonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
    },
    container3: {
        marginTop: 10,
        justifyContent: "center",
        padding: 10,
        borderRadius: 20,
        borderColor: '#CCCCCC',
        marginHorizontal: 20,
        borderWidth: 1,
    },
    description: {
        fontSize: 14,
        color: "#666666",
        textAlign: "left",
        padding: 10,
    },
    learnMore: {
        color: "#794CFF",
        textDecorationLine: "underline",
        fontWeight: '500',
    },

})
export default FindCounselor