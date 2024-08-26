import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

function Login() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        placeholder="Last Name"
        onChangeText={setLastname}
        value={lastname}
      />
      <Button
        title="Login"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Home', { user: { name, lastname } });
        }}
      />
    </View>
  );
}

export default Login;
