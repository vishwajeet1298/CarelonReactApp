import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useMemo, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUpScreen = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [date, setDate] = useState(null);
    const [show, setShow] = useState(false);
    const [gender, setGender] = useState(null);
    const [relationshipStatus, setRelationshipStatus] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');


    const genderOptions = useMemo(() => [
        {
            label: 'Male', value: 'male'
        },
        {
            label: 'Female', value: 'female'
        },
        {
            label: "Other", value: 'other'
        },
    ], []);
    const relationshipOptions = useMemo(() => [
        { label: 'Single', value: 'single' },
        { label: 'Married', value: 'married' },
        { label: 'Widowed', value: 'widowed' },
        { label: 'Divorced', value: 'divorced' },
        { label: 'Separated', value: 'separated' }
    ], []);

    const onChange = (event, selectedDate) => {
        if (event.type === 'dismissed') {
            setShow(false);
            return;
        }
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    };

    const showDatePicker = () => {
        setShow(true);
    };
    const formatDate = (date) => {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        const year = date.getFullYear();

        if (day < 10) {
            day = `0${day}`;
        }
        if (month < 10) {
            month = `0${month}`;
        }

        return `${day}/${month}/${year}`;
    };
    const isFormValid = () => {
        return firstName.trim() !== '' && lastName.trim() !== '' && date != null && zipCode.trim().length === 6 && /^[0-9]+$/.test(zipCode);
    }
    const validateAlphabetic = (text) => {
        return text.replace(/[^a-zA-Z]/g, '');
    };

    const validateAlphanumeric = (text) => {
        return text.replace(/[^a-zA-Z0-9 ]/g, '');
    };

    const validateNumeric = (text) => {
        return text.replace(/[^0-9]/g, '');
    };
    const Label = ({ text, required }) => (
        <Text style={styles.inputLabel}>
            {text}
            {required && <Text style={styles.required}> *</Text>}
        </Text>
    );

    const renderGenderItem = (item) => {
        return (
            <View style={[styles.dropdownItem, item.value === gender && styles.selectedItem]}>
                <Text style={styles.dropdownItemText}>{item.label}</Text>
            </View>
        );
    };

    const renderRelationshipStatusItem = (item) => {
        return (
            <View style={[styles.dropdownItem, item.value === relationshipStatus && styles.selectedItem]}>
                <Text style={styles.dropdownItemText}>{item.label}</Text>
            </View>
        );
    };

    const handleSubmit = () => {
        if (isFormValid()) {
            const formData = {
                firstName,
                lastName,
                dateOfBirth: date,
                gender,
                relationshipStatus,
                address1,
                address2,
                state,
                city,
                zipCode,
            };
            // Send formData to your backend or API
            console.log('Form Data:', formData);
            // Example: axios.post('https://API-endpoint.com/signup', formData)
            // .then(response => console.log(response))
            // .catch(error => console.error(error));
        } else {
            console.log('Form is not valid');
        }
    };


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.signUpHeaderView}>
                        <Text style={styles.signUpHeaderText}>Sign up</Text>
                        <Text >Please add your personal details below.</Text>
                        <View style={styles.signinView}>
                            <Text>Already have an account? </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    console.log('Navigating to Carelon');
                                    props.navigation.navigate('Carelon');
                                }}>
                                <Text style={styles.signInText}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.formView}>
                        <Label text="First Name" required />
                        <TextInput style={styles.formInputStyle} placeholder='Enter first name'
                            value={firstName}
                            onChangeText={(text) => setFirstName(validateAlphabetic(text))}></TextInput>
                    </View>
                    <View style={styles.formView}>
                        <Label text="Last Name" required />
                        <TextInput style={styles.formInputStyle} placeholder='Enter last name'
                            value={lastName}
                            onChangeText={(text) => setLastName(validateAlphabetic(text))}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.formView}>
                        <Label text="Date of Birth" required />
                        <View style={styles.datePickerContainer}>
                            <TextInput style={styles.dateInputStyle} placeholder='Select Date'
                                value={date ? formatDate(date) : ''}
                                editable={false} />
                            <TouchableOpacity onPress={showDatePicker} style={styles.iconContainer}>
                                <Icon name="calendar" size={24} color="#000" />
                            </TouchableOpacity>
                        </View>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date || new Date()}
                                mode="date"
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </View>
                    <View style={styles.formView}>
                        <Label text="Gender" />
                        <Dropdown
                            style={styles.dropdown}
                            data={genderOptions}
                            labelField="label"
                            valueField="value"
                            placeholder="Select Gender"
                            value={gender}
                            onChange={item => setGender(item.value)}
                            renderItem={renderGenderItem}
                        />
                    </View>
                    <View style={styles.formView}>
                        <Label text="Relationship status" />
                        <Dropdown
                            style={styles.dropdown}
                            data={relationshipOptions}
                            labelField="label"
                            valueField="value"
                            placeholder="Select Relationship Status"
                            value={relationshipStatus}
                            onChange={item => setRelationshipStatus(item.value)}
                            renderItem={renderRelationshipStatusItem} />

                    </View>
                    <View style={styles.formView}>
                        <Label text="Address line 1" />
                        <TextInput style={styles.formInputStyle}
                            placeholder='Address'
                            value={address1}
                            onChangeText={(text) => setAddress1(validateAlphanumeric(text))}></TextInput>
                    </View>
                    <View style={styles.formView}>
                        <Label text="Address line 2" />
                        <TextInput style={styles.formInputStyle}
                            placeholder='Address'
                            value={address2}
                            onChangeText={(text) => setAddress2(validateAlphanumeric(text))}></TextInput>
                    </View>
                    <View style={styles.formView}>
                        <Label text="State" />
                        <TextInput style={styles.formInputStyle} placeholder='Select State'
                            value={state}
                            onChangeText={setState}></TextInput>
                    </View>
                    <View style={styles.formView}>
                        <Label text="City" />
                        <TextInput style={styles.formInputStyle}
                            placeholder='Enter city'
                            value={city}
                            onChangeText={(text) => setCity(validateAlphabetic(text))}></TextInput>
                    </View>
                    <View style={styles.formView}>
                        <Label text="Zip Code" required />
                        <TextInput style={styles.formInputStyle} placeholder='Zipcode'
                            value={zipCode}
                            onChangeText={(text) => setZipCode(validateNumeric(text))}
                            maxLength={6}
                            keyboardType="numeric"></TextInput>
                    </View>
                    <TouchableOpacity style={[styles.continuebtn, { backgroundColor: isFormValid() ? 'blue' : 'gray' }]}
                        disabled={!isFormValid()}
                        onPress={handleSubmit}>
                        <Text style={styles.continuebtnText}>Continue</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    signUpHeaderView: {
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    signUpHeaderText: {
        color: "#5009B5",
        fontSize: 24,
        fontWeight: "600",
        marginTop: 10,
        marginBottom: 10,
    },
    signinView: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    signInText: {
        color: '#794CFF',
    },
    formView: {
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    inputLabel: {
        fontWeight: "500",
        fontSize: 16,
        marginBottom: 5,
        color: "#333333",
    },
    required: {
        color: 'red',
    },
    formInputStyle: {
        borderColor: "#999999",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,

    },
    datePickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "#999999",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    dateInputStyle: {
        flex: 1,
        paddingHorizontal: 10,
    },
    iconContainer: {
        marginLeft: 10,

    },
    dropdown: {
        borderColor: "#999999",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
    },
    dropdownItem: {
        padding: 10,
    },
    selectedItem: {
        backgroundColor: '#EBE4FF',
    },
    dropdownItemText: {
        fontSize: 16,
    },
    continuebtn: {
        padding: 8,
        borderRadius: 20,
        marginBottom: 10,
        marginHorizontal: 15,
    },
    continuebtnText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },


})
export default SignUpScreen;
