import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const countries = ["USA", "UK", "Canada", "Pakistan", "India"];

const SignupScreen = ({ navigation }) => {
  const [gender, setGender] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#aaa" />

      {/* Gender Selection */}
      <Text style={styles.label}>Gender</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity 
          style={[styles.radioButton, gender === 'Male' && styles.selectedRadio]} 
          onPress={() => setGender('Male')}
        >
          <Text style={[styles.radioText, gender === 'Male' && styles.selectedRadioText]}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.radioButton, gender === 'Female' && styles.selectedRadio]} 
          onPress={() => setGender('Female')}
        >
          <Text style={[styles.radioText, gender === 'Female' && styles.selectedRadioText]}>Female</Text>
        </TouchableOpacity>
      </View>

      {/* Country Selection - Improved Dropdown */}
      <Text style={styles.label}>Country</Text>
      <TouchableOpacity style={styles.dropdown} onPress={() => setModalVisible(true)}>
        <Text style={selectedCountry ? styles.selectedText : styles.placeholderText}>
          {selectedCountry || "Select a country"}
        </Text>
        <AntDesign name="down" size={16} color="#666" />
      </TouchableOpacity>

      {/* Modal for Country Selection */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Country</Text>
            <FlatList
              data={countries}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.modalItem} 
                  onPress={() => {
                    setSelectedCountry(item);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.modalText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Signup Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Back to Login */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.backToLogin}>Already have an account? <Text style={styles.loginText}>Login</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#333', marginBottom: 20 },
  input: { width: '90%', padding: 14, marginVertical: 8, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, backgroundColor: '#fff' },
  label: { alignSelf: 'flex-start', marginLeft: '5%', fontSize: 16, fontWeight: '600', color: '#333', marginTop: 10 },
  
  /* Radio Buttons */
  radioContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginVertical: 10 },
  radioButton: { flex: 1, padding: 12, marginHorizontal: 5, borderWidth: 1, borderRadius: 8, borderColor: '#007AFF', alignItems: 'center' },
  selectedRadio: { backgroundColor: '#007AFF' },
  radioText: { fontSize: 16, color: '#007AFF', fontWeight: '600' },
  selectedRadioText: { color: 'white' },

  /* Dropdown */
  dropdown: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', padding: 14, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, backgroundColor: '#fff', marginVertical: 10 },
  placeholderText: { color: '#aaa', fontSize: 16 },
  selectedText: { fontSize: 16, color: '#333' },

  /* Modal */
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  modalContent: { width: '80%', backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  modalItem: { width: '100%', padding: 15, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#ddd' },
  modalText: { fontSize: 16 },
  closeButton: { marginTop: 10, padding: 10, backgroundColor: '#007AFF', borderRadius: 5, width: '80%', alignItems: 'center' },
  closeButtonText: { color: 'white', fontSize: 16 },

  /* Buttons */
  signUpButton: { width: '90%', backgroundColor: '#007AFF', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  signUpText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  backToLogin: { marginTop: 20, fontSize: 14, color: '#333' },
  loginText: { fontWeight: 'bold', color: '#007AFF' },
});

export default SignupScreen;
