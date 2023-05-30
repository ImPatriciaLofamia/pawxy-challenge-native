import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SearchBar from "../components/SearchBar";

const Search = () => {
  return (
     <View style={styles.container}>
      <View>
       <View style={styles.sublabel}>
       <MaterialCommunityIcons name="google" size={16} color={'#d97706'} style={styles.centerIcons} />
       <Text style={{color: '#b45309'}}>powered by Google</Text>
       </View>
        <Text style={styles.Header}>Video Search Engine</Text>
      </View>
      <SearchBar/>
      <View style={styles.sublabel}>
      <TouchableOpacity style={styles.touchableButton}>
        <Text>
        Google Search
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableButton}>
        <Text>
        I'm Feeling Lucky
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    margin: 10,
  },
  Header: {
    fontSize: 36,
    fontWeight: "700",
    alignItems: "center",
    textAlign: "center",
  },
  centerIcons: {
    justifyContent: 'center'
  },
  sublabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  touchableButton: {
    padding: 8,
    backgroundColor: '#f8fafc',
    borderRadius: 4,
  },
  textButton: {
    textAlign: 'center',
    fontWeight: "500"
  }
});

export default Search;
