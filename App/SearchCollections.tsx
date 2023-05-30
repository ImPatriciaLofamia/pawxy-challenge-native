import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import SearchBar from "../components/SearchBar";
import { collectionData } from "../lib/data";
import VideoCards from "../components/VideoCards";
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const StickyHeader = () => {
  return (
    <View style={styles.stickyContainer}>
      <Text style={{ fontSize: 20, fontWeight: "500" }}>
        Video Search Engine
      </Text>
      <SearchBar />
    </View>
  );
};

const Navigation = () => {
  return (
    <View style={styles.navigationContainer}>
      <TouchableOpacity style={styles.NextButton}>
        <Text style={styles.textButton}>Next</Text>
        <MaterialCommunityIcon name="arrow-right" size={16} />
      </TouchableOpacity>
    </View>
  );
};

const Keyword = () => {
  return (
    <View style={styles.keyword}>
      <Ionicons name="search" size={16} color="#0284c7" />
      <Text
        style={{
          color: "#0284c7",
        }}
      >
        Search keyword on Google
      </Text>
    </View>
  );
};

export const SearchCollections = () => {
  return (
    <View style={styles.container}>
      <StickyHeader />
      <ScrollView>
        {collectionData.map((video) => {
          return (
            <View key={video.id} style={styles.collection}>
              <VideoCards
                thumbnail={video.thumbnail}
                title={video.title}
                author={video.author}
                icon={video.icon}
                source={video.source}
                views={video.views}
              />
            </View>
          );
        })}
      </ScrollView>
      <Navigation />
      <Keyword />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 15,
    marginTop: 25,
    marginBottom: 25,
  },
  stickyContainer: {
    display: "flex",
    gap: 10,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: "#fff",
  },
  navigationContainer: {
    display: "flex",
    paddingTop: 20,
    paddingBottom: 15,
    backgroundColor: "#fff",
  },
  collection: {
    paddingBottom: 8,
  },
  NextButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    padding: 16,
  },
  textButton: {
    fontSize: 14,
    fontWeight: "600",
  },
  keyword: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 16,
    gap: 10,
  },
});

export default SearchCollections;
//className='text-lg font-bold pb-2'
//className=" h-1 w-15 rounded-full bg-sky-600"
//className='text-lg font-bold pb-2'>Following
