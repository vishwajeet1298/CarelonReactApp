import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const DrawerContent = () => {
   
  return (
    <DrawerContentScrollView>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.headerText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.headerText}>Create an account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>
      <DrawerItemList />
      <DrawerItem
        label="Services"
        onPress={() => alert('Services')}
      />
      <DrawerItem
        label="Care"
        onPress={() => alert('Care')}
      />
      <DrawerItem
        label="Wellbeing Content"
        onPress={() => alert('Wellbeing Content')}
      />
      <DrawerItem
        label="Forms and Documents"
        onPress={() => alert('Forms and Documents')}
      />
      <DrawerItem
        label="Contact Us"
        onPress={() => alert('Contact Us')}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#794CFF',
  },
  searchContainer: {
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
});

export default DrawerContent;
