import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const ProductCard = ({ product, onPress }) => (
  <TouchableOpacity style={styles.productCard} onPress={onPress}>
    <Image style={styles.productImage} source={{ uri: product.image }} />
    <Text style={styles.productName}>{product.name}</Text>
    <Text style={styles.productPrice}>Rs. {product.price}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    // modalContainer: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: '#000000aa',
  
    // },
    modalContainer: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 2,
      shadowRadius: 3.84,
      elevation: 10,
      height: '75%', // You can adjust the height as needed
      marginTop: 100, // You can adjust the marginTop to place the modal as desired
    },
    modalProductPrice: {
      fontSize: 20,
      margin: 20,
      marginTop: 0,
    },
    modalProductName: {
      fontSize: 25,
      fontWeight: 'bold',
      margin: 20,
      marginBottom: 0,
    },
    modalProductDesc: {
      fontSize: 15,
      margin: 20,
      marginTop: 0,
    },
    modalImage: {
      // styles for image in modal
      height: 300,
      width: 300,
      borderRadius: 10,
  
    },
    closeButton: {
      backgroundColor: 'black',
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      width: 300,
    },
    closeButtonT:{
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 20,
    },
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

export default ProductCard;
