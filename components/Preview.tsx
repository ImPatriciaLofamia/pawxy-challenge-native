import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const Preview = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `https://picsum.photos/536/354` }}
        style={styles.thumbnail}
      />
      <View style={styles.textContainer}>
        <Text style={styles.header}>
          K-pop group BLACKPINK to release Ready For Love on July 29. Details
          inside. - India Today
        </Text>
        <View style={styles.Row}>
          <View style={styles.Row}>
            <MaterialCommunityIcons
              name="youtube"
              size={20}
              color={"#dc2626"}
            />
            <Text style={styles.text}>Koreaboo</Text>
          </View>
          <Text style={styles.text}>123k views</Text>
        </View>
      </View>
      <View style={styles.touchableContainer}>
        <TouchableOpacity style={styles.touchableButtonVisit}>
          <Text style={styles.touchableText}>Visit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableButtonClose}>
          <Text style={styles.touchableText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-around",
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "#18181b",
  },
  thumbnail: {
    width: "100%",
    height: "30%",
  },
  Row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    gap: 10,
  },
  textContainer: {
    width: "90%",
    gap: 10,
    padding: 5,
  },
  header: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
  text: {
    fontSize: 14,
    color: "#52525b",
  },
  touchableText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: "600"
  },
  touchableButtonClose: {
    backgroundColor: '#52525b',
    borderWidth: 1,
    width: "25%",
    padding: 10,
    borderRadius: 24
  },
  touchableButtonVisit: {
    backgroundColor: '#0369a1',
    borderWidth: 1,
    width: "25%",
    padding: 10,
    borderRadius: 24
  },
  touchableContainer: {
    width: "100%", 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  }

});

export default Preview;
