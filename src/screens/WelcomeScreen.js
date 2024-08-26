import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Linking,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const WelcomeScreen = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const login = 'Sign in';

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
            <View style={styles.headerView}>
                <Image source={require('../../assets/logo/logo.png')} />
                <Text style={styles.paragraph}>Wellbeing resources you can trust.</Text>
            </View>
            <View style={styles.mainContent}>
                <Text style={styles.headText}>{login}</Text>
                <Text style={styles.accStatus}>
                    Don't have an account?{' '}
                    <TouchableOpacity
                        onPress={() => Linking.openURL('http://google.com')}>
                        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                            Sign up{' '}
                        </Text>
                    </TouchableOpacity>
                </Text>

                <Text style={styles.inputLabel}>Username/email</Text>
                <TextInput 
                style={styles.inputStyle}
                placeholder="Username/email"
                ></TextInput>
                <TouchableOpacity style={styles.touchTextStyle} onPress={() => { }}>
                    <Text style={styles.forgotText}>Forgot username</Text>
                </TouchableOpacity>

                <Text style={styles.inputLabel}>Password</Text>
                <View style={styles.passwordInput}>
                    <TextInput
                        secureTextEntry={hidePassword}
                        style={styles.passInputStyle}
                        placeholder="Password"
                    />
                    <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setHidePassword(!hidePassword)}>
                        <Text>{hidePassword ? 'Show' : 'Hide'}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.touchTextStyle} onPress={() => { }}>
                    <Text style={styles.forgotText}>Forgot password</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button}>
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
        padding: 40,
    },
    paragraph: {
        margin: 24,
        marginTop: 0,
        fontSize: 14,
        textAlign: 'center',
    },
    mainContent: {
        marginHorizontal: 15,
    },
    accStatus: {
        marginBottom: 20,
    },
    headText: {
        fontWeight: "700",
        color: 'blue',
        marginBottom: 10,
    },
    inputLabel: {
        marginBottom: 5,
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
        margin: 5,
    },
    passInputStyle: {
        flex: 1,
        padding: 10,
    },
    forgotText: {
        textDecorationLine: 'underline',
        fontSize: 12,
        color: '#794CFF',
    },
    eyeIcon: {
        padding: 5,
    },
    touchTextStyle: {
        textDecorationLine: 'underline',
        fontSize: 12,
        color: 'blue',
        marginTop: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 8,
        borderRadius: 20,
        marginTop: 80,
        marginBottom: 20,
        marginHorizontal: 15,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default WelcomeScreen;
