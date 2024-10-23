import React from 'react';
import { KeyboardAvoidingView, Text } from 'react-native';
import CarelonHeader from '../components/CarelonHeader';

const countofsearchresults=2324
const ProviderSearchResults = () => {
  return (<>
    <CarelonHeader />
    <KeyboardAvoidingView>
      <Text>Search results ({countofsearchresults})</Text>
    </KeyboardAvoidingView>
    </>
  )
}

export default ProviderSearchResults