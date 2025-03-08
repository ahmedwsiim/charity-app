import React, { useState } from 'react';
import { 
  View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image 
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const categories = ['No Poverty', 'Good Health', 'Gender Equality'];
const allPrograms = [
  { title: 'Feeding Indian Domestic Needs',image: require('../assets/feeding.jpg'), raised: 'Rs 85,000', progress: '55%', category: 'No Poverty' },
  { title: 'Support Handloom Workers',image: require('../assets/handloom.jpg'), raised: 'Rs 95,000', progress: '60%', category: 'Good Health' },
  { title: 'Help the Poverty', image: require('../assets/poverty.jpg'), raised: 'Rs 125,000', progress: '70%', category: 'No Poverty' },
];

const HomeScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [programs, setPrograms] = useState(allPrograms);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    const filteredPrograms = allPrograms.filter(program => program.category === category);
    setPrograms(filteredPrograms.length ? filteredPrograms : allPrograms);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Hello Ahmad!</Text>
      <Text style={styles.subtitle}>Giving is Making a Difference!!</Text>
      
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchBar} placeholder="Search" />
        <Ionicons name="mic" size={24} color="gray" style={styles.micIcon} />
      </View>
      
      <View style={styles.categoryContainer}>
        {categories.map((cat, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.categoryButton, selectedCategory === cat && styles.selectedCategoryButton]} 
            onPress={() => handleCategorySelect(cat)}
          >
            <Text style={styles.categoryText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Top Programs</Text>
      
      <Swiper style={styles.swiper} showsPagination loop>
        {programs.map((program, index) => (
          <View key={index} style={styles.programCard}>
            <Image source={program.image} style={styles.programImage} />
            <Text style={styles.programTitle}>{program.title}</Text>
            <TouchableOpacity 
              style={styles.donateButton} 
              onPress={() => navigation.navigate('Donate', { program })}
            >
              <Text style={styles.donateText}>Donate</Text>
            </TouchableOpacity>
          </View>
        ))}
      </Swiper>
    </ScrollView>
  );
};

const DonateScreen = ({ route }) => {
  const program = route.params?.program || { title: "Select a Program", raised: "N/A" };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Donate to {program.title}</Text>
      <Text style={styles.subtitle}>Amount Raised: {program.raised}</Text>
      <TextInput style={styles.searchBar} placeholder="Enter donation amount" keyboardType="numeric" />
      <TouchableOpacity style={styles.donateButton}>
        <Text style={styles.donateText}>Donate Now</Text>
      </TouchableOpacity>
    </View>
  );
};


const ProfileScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Your Profile</Text>
    <Text style={styles.subtitle}>Name: Ahmad</Text>
    <Text style={styles.subtitle}>Email: Ahmad@example.com</Text>
    <TouchableOpacity style={styles.donateButton}>
      <Text style={styles.donateText}>Edit Profile</Text>
    </TouchableOpacity>
  </View>
);

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{ 
          headerShown: false, 
          tabBarStyle: { backgroundColor: '#fff', paddingBottom: 5, height: 80 },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={'#e74c3c'} /> }}
        />
        <Tab.Screen 
          name="Donate" 
          component={DonateScreen} 
          options={{ tabBarIcon: ({ color }) => <FontAwesome name="heart" size={24} color={'#e74c3c'} /> }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={'#e74c3c'} /> }}
        />
      </Tab.Navigator>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#FCEDED", flex: 1 },
  title: { fontSize: 28, fontWeight: "bold", marginTop: 40 },
  subtitle: { fontSize: 16, color: "gray", marginBottom: 20 },
  searchContainer: { 
    flexDirection: "row", alignItems: "center", backgroundColor: "white", 
    borderRadius: 10, padding: 10, marginBottom: 20 
  },
  searchBar: { flex: 1, paddingLeft: 10 },
  micIcon: { marginLeft: 10 },
  categoryContainer: { flexDirection: "row", justifyContent: "space-around", marginBottom: 20 },
  categoryButton: { padding: 10, borderRadius: 20, backgroundColor: "#e74c3c" },
  categoryText: { color: "white", fontWeight: "bold" },
  selectedCategoryButton: { backgroundColor: "#c0392b" },
  sectionTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  
  // **🔹 Swiper Section Enhancements**
  swiper: { 
    height: 280, // Increased height for better visibility
  },

  // **🔹 Enhanced Program Cards**
  programCard: { 
    backgroundColor: "#FFE5E7",
    padding: 20, 
    borderRadius: 20, // More rounded for a modern look
    alignItems: "center",
    elevation: 6, // Slightly stronger shadow for depth
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 }, // Higher shadow offset for better lift
    shadowOpacity: 0.25,
    shadowRadius: 6,
    marginHorizontal: 15, // Spacing between cards
    marginBottom: 40, // More space to avoid cut-off feel
    width: 320, // Slightly wider for better layout
    alignSelf: "center",
    paddingBottom: 30, // Extra bottom padding to prevent cut-off
  },
  

  programImage: { 
    width: "100%", 
    height: 140, // Bigger and clearer images
    borderRadius: 12, 
    marginBottom: 15,
  },
  
  programTitle: { 
    fontSize: 20, // Bigger and bolder text
    fontWeight: "bold", 
    textAlign: "center",
    color: "#D32F2F",
    marginBottom: 10, 
  },

  // **🔹 Improved Donate Button**
  donateButton: { 
    backgroundColor: "#D32F2F", 
    paddingVertical: 14, // Taller button
    paddingHorizontal: 25,
    borderRadius: 8, 
    width: "90%", // Wider button for better UX
    alignItems: "center",
    shadowColor: "#D32F2F",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  donateText: { 
    color: "white", 
    fontSize: 18, 
    fontWeight: "bold", 
    textTransform: "uppercase", 
  },
});

