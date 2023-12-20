import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {SearchBar, Icon } from 'react-native-elements';
const Header = ({ title, onCartPress,searchQuery,updateSearch }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{title}</Text>
    <View style={styles.headerIcons}>
    <View style={{display:'flex',flexDirection:'row'}}>
        <SearchBar style={{display:'flex',flexDirection:'row'}}
          placeholder="Search Products..."
          onChangeText={updateSearch}
          value={searchQuery}
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInput}
          round
        />
      <TouchableOpacity onPress={onCartPress} style={styles.cartIcon}>
        <Icon name="shopping-cart" type="font-awesome" size={35} color="black" />
      </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
    },
    header: {
      // height: 180,
      marginTop: 20,
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1,
    },
    headerText: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginHorizontal: 15,
      marginTop: 20,
    },
    productCard: {
      margin: 10,
      padding: 10,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      elevation: 3,
      shadowOpacity: 0.3,
      shadowRadius: 3,
      shadowOffset: { width: 0, height: 2 },
      height: 250,
      width: 150,
      justifyContent: 'center',
      alignItems: 'center',
    },
    productImage: {
      width: 120,
      height: 120,
      borderRadius: 10,
      marginBottom: 10,
    },
    productName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    productPrice: {
      fontSize: 14,
      marginTop: 10,
    },
    searchContainer: {
      backgroundColor: '#f4f4f4',
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
      // flex: 1,
    },
    searchInput: {
      backgroundColor: 'white',
      width: 280,
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      
    },
    addToCartButton: {
      backgroundColor: 'green',
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      width: 300,
      marginBottom: 10,
    },
    addToCartButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 20,
    },
    cartItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
  });

export default Header;
