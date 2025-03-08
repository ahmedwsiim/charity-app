import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { ProgressBar } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

const DonationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: "https://example.com/image.jpg" }}
        style={styles.mainImage}
      />
      
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Recent Dooners</Text>
        <View style={styles.donorRow}>
          {["https://example.com/avatar1.jpg", "https://example.com/avatar2.jpg", "https://example.com/avatar3.jpg"].map((uri, index) => (
            <Image key={index} source={{ uri }} style={styles.avatar} />
          ))}
          <Text style={styles.moreDonors}>+442</Text>
        </View>
        
        <View style={styles.donationInfo}>
          <Text style={styles.amount}>Rs 85 000</Text>
          <Text style={styles.daysLeft}><Icon name="clock-o" size={14} /> 15 days left</Text>
        </View>
        <ProgressBar progress={0.5} color="#3b82f6" style={styles.progressBar} />
        
        <Text style={styles.title}>Support Handloom Workers</Text>
        <Text style={styles.description}>
          The position of handlooms in the socio-political arena and the sector’s annual contribution to the economy cannot be objectively stated. The reasons are hidden.
        </Text>
      </View>
      
      <TouchableOpacity style={styles.donateButton}>
        <Text style={styles.donateText}>Help her ❤️</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  mainImage: {
    width: "100%",
    height: 220,
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  donorRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: -5,
    borderWidth: 2,
    borderColor: "#fff",
  },
  moreDonors: {
    fontSize: 14,
    marginLeft: 10,
    fontWeight: "bold",
  },
  donationInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  daysLeft: {
    color: "#3b82f6",
    fontSize: 14,
  },
  progressBar: {
    height: 6,
    marginTop: 8,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginTop: 8,
  },
  donateButton: {
    backgroundColor: "#e63946",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 20,
  },
  donateText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DonationScreen;
