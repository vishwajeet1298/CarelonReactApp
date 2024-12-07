import React, { useEffect, useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const Carelon = (props) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    // const navigation = useNavigation();

    const URL = "https://fakestoreapi.com/users";

    const InputLabel = ({ text }) => <Text style={styles.inputLabel}>{text}</Text>;

    const ErrorText = ({ text }) => <Text style={styles.errorText}>{text}</Text>;


    const checkLogin = async () => {
        console.log("Email: " + username + " Password: " + password);

        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: username,
                    password: password,
                })
            });

            const data = await response.json();

            if (data.success) {
                Alert.alert('Logged in!');
                setUser({ username, password });
                props.navigation.navigate('NextScreen');
            } else {
                Alert.alert('Failed to log in');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('An error occurred while trying to log in');
        }
    };


    useEffect(() => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[A-Za-z]).{8,}$/;

        if (username && !emailRegex.test(username)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }

        if (password && !passwordRegex.test(password)) {
            setPasswordError('Password should contain 8 characters and at least 1 Special Character.');
        } else {
            setPasswordError('');
        }

        if (emailRegex.test(username) && passwordRegex.test(password)) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [username, password]);

    const login = 'Sign in';
    const brandHeader= 'Wellbeing resources you can trust.';
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
   
            <View style={styles.containerMain}>

            <View style={styles.headerView}>
                <Image source={require('../../assets/logo.png')} />
                <Text style={styles.paragraph}>{brandHeader}</Text>
            </View>
            <View style={styles.mainContent}>
                <Text style={styles.headText}>{login}</Text>
                <View style={styles.signupView}>
                    <Text>{"Don't have an account? "}</Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={{ color: '#794CFF', textDecorationLine: 'underline' }}>
                            {"Sign up"}
                        </Text>
                    </TouchableOpacity>
                </View>

                <InputLabel text="Username/email" />
                <TextInput style={styles.inputStyle}
                    onChangeText={(text) => setUsername(text)}
                    // onChangeText={setUsername}
                    placeholder='Username/email'
                />
                <ErrorText text={emailError} />
                <TouchableOpacity style={styles.touchTextStyle} onPress={() => { }}>
                    <Text style={styles.forgotText}>Forgot username</Text>
                </TouchableOpacity>

                <Text style={styles.inputLabel}>Password</Text>
                <View style={styles.passwordInput}>
                    <TextInput
                        secureTextEntry={hidePassword}
                        style={styles.passInputStyle}
                        onChangeText={(text) => setPassword(text)}
                        // onChangeText={setPassword}
                        placeholder='Password'
                    />

                    <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setHidePassword(!hidePassword)}>
                            <Text>{hidePassword ? 'Show' : 'Hide'}</Text>
                            {/* <Entypo name={hidePassword ? 'eye-with-line' : 'eye'} size={20} color="grey" /> */}

                    </TouchableOpacity>

                </View>
                <Text style={styles.errorText}>{passwordError}</Text>
                <TouchableOpacity style={styles.touchTextStyle} onPress={() => { }}>
                    <Text style={styles.forgotText}>Forgot password</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                // onPress={checkData}
                style={styles.addUserButton}
            >
                <Text style={styles.buttonText}>Add User</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.passButton}
                onPress={() => {
                    // Pass params back to home screen
                    props.navigation.navigate('Home', { user: { username, password } });
                  }}
            >
                <Text style={styles.buttonText}>Pass</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.greybutton, isDisabled ? { backgroundColor: 'grey' } : { backgroundColor: 'blue' }]}
                disabled={isDisabled}
                // onPress={() => checkLogin()}
                onPress={() => props.navigation.navigate('Search')}
            >
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>       
         </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    headerView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
    },

    paragraph: {
        margin: 24,
        marginTop: 0,
        fontSize: 14,
        textAlign: 'center',
        width: 150,
        fontFamily: 'OpenSans-Medium',
    },
    mainContent: {
        marginHorizontal: 15,
    },
    signupView: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
    },
    headText: {
        fontWeight: 'bold',
        color: '#5009B5',
        fontSize: 28,
        marginBottom: 10,

    },
    inputLabel: {
        marginBottom: 5,
        marginTop: 10,
    },
    inputStyle: {
        borderColor: 'grey',
        padding: 8,
        borderRadius: 10,
        color: 'black',
        backgroundColor: 'white',
        borderWidth: 1,
    },
    passwordInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        backgroundColor: 'white',

    },
    forgotText: {
        textDecorationLine: 'underline',
        fontSize: 12,
        color: '#794CFF',
    },
    passInputStyle: {
        flex: 1,
        padding: 10,
    },
    eyeIcon: {
        padding: 5,
    },
    touchTextStyle: {
        fontSize: 12,
        marginTop: 5,
        marginBottom: 5,
    },
    greybutton: {
        backgroundColor: 'grey',
        padding: 8,
        borderRadius: 20,
        marginBottom: 20,
        marginHorizontal: 15,
    },
    addUserButton: {
        backgroundColor: 'blue',
        padding: 8,
        borderRadius: 20,
        marginBottom: 10,
        marginHorizontal: 15,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },
    passButton: {
        backgroundColor: 'blue',
        padding: 8,
        borderRadius: 20,
        marginBottom: 10,
        marginHorizontal: 15,
    },
    

    errorText: {
        color: 'red',
    },
});


export default Carelon;
