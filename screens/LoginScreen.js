import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Username" 
        placeholderTextColor="#888" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        placeholderTextColor="#888" 
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signUpText}>Don't have an account? <Text style={styles.highlightText}>Sign Up</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#ffffff', 
    padding: 20 
  },
  title: { 
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 20 
  },
  input: { 
    width: '90%', 
    padding: 15, 
    marginBottom: 15, 
    borderWidth: 1, 
    borderColor: '#ddd', 
    borderRadius: 10, 
    backgroundColor: '#f9f9f9', 
    color: '#333',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  button: { 
    width: '90%', 
    backgroundColor: '#e74c3c', 
    padding: 15, 
    borderRadius: 10, 
    alignItems: 'center', 
    marginTop: 10,
    shadowColor: "#e74c6c",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5
  },
  buttonText: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  signUpButton: { 
    marginTop: 20 
  },
  signUpText: { 
    fontSize: 14, 
    color: '#666' 
  },
  highlightText: { 
    fontWeight: 'bold', 
    color: '#007AFF' 
  }
});

export default LoginScreen;
