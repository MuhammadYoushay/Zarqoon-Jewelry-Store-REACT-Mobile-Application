// StartScreen.js
import React, { useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import LottieView from 'lottie-react-native';

const StartScreen = ({ navigation }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.replace('Login'); // Navigate to the main screen (BottomTabs)
    }, 5000); // 10 seconds in milliseconds

    return () => clearTimeout(timeoutId); // Clear the timeout if the component is unmounted
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
    <Text style={{ fontSize: 50, fontWeight: 'bold', textAlign:'center',margin:20}}>ZARQOON</Text>
      <View style={styles.centered}>
        <LottieView
          source={require('../Animation - 1701963788054.json')}
          autoPlay
          loop={true}
        />
      </View>
      <Text style={{ fontSize: 15, fontWeight: 'bold',textAlign:'center',margin:20 }}>Where Tradition Meets Modernity!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StartScreen;
