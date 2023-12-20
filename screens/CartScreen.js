import React, { useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useCart } from '../cartContext';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure to install this package
import { SafeAreaView } from 'react-native-safe-area-context';

const CartScreen = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

  const cartTotal = useMemo(() => 
    cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  const renderCartItem = ({ item }) => {
    return (
      <View style={styles.cartItem}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>Rs. {item.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => decrementQuantity(item._id)} style={styles.quantityButton}>
            <Icon name="remove" size={22} color="#000" />
          </TouchableOpacity>
          <View style={styles.quantityValueContainer}>
            <Text style={styles.quantityValue}>{item.quantity}</Text>
          </View>
          <TouchableOpacity onPress={() => incrementQuantity(item._id)} style={styles.quantityButton}>
            <Icon name="add" size={22} color="#000" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => removeFromCart(item._id)} style={styles.removeButton}>
          <Icon name="delete" size={22} color="#FF6347" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container1}>
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Your Cart</Text>
      {cart.length > 0 ? (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item._id}
            renderItem={renderCartItem}
          />
          <Text style={styles.cartTotal}>Total: Rs. {cartTotal.toFixed(2)}</Text>
        </>
      ) : (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      )}
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Light background for freshness
    padding: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Light background for freshness
    padding: 16,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333', // Dark text for better readability
    paddingBottom: 16,
  },
  cartItem: {
    padding: 16,
    backgroundColor: '#fff', // White backgrounds for cards
    borderRadius: 8, // Rounded corners for a softer look
    marginBottom: 16,
    shadowColor: '#000', // Subtle shadow for depth
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  productName: {
    fontSize: 20,
    fontWeight: '500',
    flex: 1,
  },
  productPrice: {
    flex: 0.5,
    fontSize: 16,
    color: '#666', // Slightly muted color for price
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityValueContainer: {
    marginHorizontal: 12,
  },
  quantityValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  removeButton: {
    padding: 6,
  },
  cartTotal: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'right',
    marginTop: 16,
    borderTopWidth: 1,
    borderColor: '#e1e1e1', // Light border for a clean separation
    paddingTop: 8,
  },
  emptyCartText: {
    fontSize: 18,
    color: '#a9a9a9', // Grey color to indicate emptiness
    textAlign: 'center',
    marginTop: 32,
  },
});

export default CartScreen;