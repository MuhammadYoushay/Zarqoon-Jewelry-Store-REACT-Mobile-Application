import React, { useState, useEffect } from 'react';
import { SearchBar, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import ProductCard from '../components/productCard';
import ModalContent from '../components/modalContent';
import Header from '../components/header';
import { useCart } from '../cartContext';
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal
} from 'react-native';

const HomeScreen = () => {
  const { cart, addToCart: addToCartContext } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // New state to keep track of the selected product
  // const [cart, setCart] = useState([]);
  const navigation = useNavigation(); // useNavigation hook to get navigation prop
  // http://10.15.4.129:8000/products
    // http://192.168.18.41:8000/products
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity onPress={goToCart} style={{ marginRight: 20, backgroundColor:'pink'}}>
            <Icon name="shopping-cart" type="font-awesome" size={25} color="black" />
          </TouchableOpacity>
        ),
      });
    }, [navigation, cart]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://192.168.18.41:8000/products');
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const updateSearch = (search) => {
    setSearchQuery(search);
  };


  const goToCart = () => {
    navigation.navigate('Cart', { cart }); // Assuming you have a 'Cart' screen
  };
  const addToCart = () => {
    if (selectedProduct) {
      addToCartContext(selectedProduct);
      setModalVisible(false);
    }
  };
  // const addToCart = () => {
  //   if (selectedProduct) {
  //     const existingProductIndex = cart.findIndex(item => item._id === selectedProduct._id);
  
  //     if (existingProductIndex !== -1) {
  //       // Product already exists in the cart, update the quantity
  //       const updatedCart = [...cart];
  //       updatedCart[existingProductIndex].quantity += 1;
  //       setCart(updatedCart);
  //     } else {
  //       // Product is not in the cart, add it with quantity 1
  //       setCart(prevCart => [...prevCart, { ...selectedProduct, quantity: 1 }]);
  //     }
  
  //     setModalVisible(false); // Close the modal after adding to the cart
  //   }
  // };
  const renderFavourites = () => (
    <>
      <Text style={styles.sectionTitle}>New Arrivals</Text>
      <FlatList
        horizontal
        data={newProducts}
        keyExtractor={(item) => item._id}
        renderItem={renderProduct}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={<></>}
      />

      <Text style={styles.sectionTitle}>Trending</Text>
      <FlatList
        horizontal
        data={trendingProducts}
        keyExtractor={(item) => item._id}
        renderItem={renderProduct}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={<></>}
      />
    </>
  );

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };


  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => openProductModal(item)} // Open modal with product details on press
    >
      <Image style={styles.productImage} source={{ uri: item.image }} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>Rs. {item.price}</Text>
    </TouchableOpacity>
  );


  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  const newProducts = products.filter((product) => product.new);
  const trendingProducts = products.filter((product) => product.trending);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <SafeAreaView style={styles.container}>
    {/* Pop-up modal for displaying product details when a product card is clicked */}
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalContainer}>
      <ModalContent
        product={selectedProduct}
        addToCart={addToCart}
        closeModal={() => setModalVisible(false)}
      />
      </View>
    </Modal>
    
    {/* SearchBar and header */}
    <Header title="ZARQOON" onCartPress={goToCart} searchQuery={searchQuery} updateSearch={updateSearch} />

    {/* Products list */}
    <Text style={styles.sectionTitle}>Explore Our Products</Text>
    <FlatList
      ListHeaderComponent={<FlatList
        horizontal
        data={filteredProducts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => openProductModal(item)} />
        )}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={<></>}
      />}
      ListFooterComponent={renderFavourites}
    />
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  productCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: 150,
  },
  productImage: {
    height: 150,
    width: 130,
    borderRadius: 10,
    alignSelf: 'center',
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#888888',
  },
});
export default HomeScreen;