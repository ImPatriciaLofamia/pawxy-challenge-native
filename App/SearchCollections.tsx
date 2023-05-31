import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import SearchBar from "../components/SearchBar";
import { collectionData } from "../lib/data";
import VideoCards from "../components/VideoCards";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Puller from "../components/Puller";

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
        <MaterialCommunityIcons name="arrow-right" size={16} />
      </TouchableOpacity>
    </View>
  );
};

const Keyword = () => {
  return (
    <TouchableOpacity>
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
    </TouchableOpacity>
  );
};

export const SearchCollections = () => {
  const [preview, setPreview] = useState(false);

  const closePreview = () => {
    setPreview(false);
  }

  

  return (
      <View style={styles.container}>
        <StickyHeader />
        <ScrollView>
          <View>
            {collectionData.map((video) => {
              return (
                <View key={video.id} style={styles.collection}>
                  <VideoCards
                    onPress={() => {
                      setPreview(true);
                    }}
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
          </View>
          <Navigation />
          <Keyword />
        </ScrollView>
         {
        preview && (
        <View style={styles.pullercontainer}>
          <View style={styles.puller} />
          <Text style={styles.previewText}>Preview</Text>
          <Image
            source={{ uri: "https://picsum.photos/536/354" }}
            style={{ height: 200, backgroundColor: "#f2f2f2", marginTop: 16 }}
          />
          <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 16 }}>
            Must Watch: Blackpink Cover 'Elle', 'Vogue' Launches New Podcast -
            Fashionista
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 8,
              alignItems: "center",
              gap: 5,
            }}
          >
            <MaterialCommunityIcons
              name="youtube"
              size={15}
              color={"#dc2626"}
            />
            <Text style={{ marginRight: 8 }}>Koreaboo</Text>
            <Text>123k Views</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={{
                backgroundColor: "#3b82f6",
                padding: 10,
                width: "25%",
                borderRadius: 24,
              }}
              onPress={() => {

              }}
            >
              <Text style={styles.textPuller}>Visit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#6b7280",
                padding: 10,
                width: "25%",
                borderRadius: 24,
              }}
              onPress={closePreview}
            >
              <Text style={styles.textPuller}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
        )
      }
      </View>
     
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    width: "100%",
  },
  stickyContainer: {
    display: "flex",
    gap: 10,
    marginTop: 10,
    paddingTop: 20,
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
    gap: 10,
    padding: 5,
    width: "90%",
    alignSelf: "center",
    dispplay: "flex",
    flexDirection: "column",
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
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
  },
  touchableButtonClose: {
    backgroundColor: "#52525b",
    borderWidth: 1,
    width: "25%",
    padding: 10,
    borderRadius: 24,
  },
  touchableButtonVisit: {
    backgroundColor: "#0369a1",
    borderWidth: 1,
    width: "25%",
    padding: 10,
    borderRadius: 24,
  },
  touchableContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  bottomContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: 10,
    justifyContent: "space-around",
  },

  pullercontainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: "#6b7280",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    overflow: "hidden",
  },
  puller: {
    width: 30,
    height: 6,
    backgroundColor: "#ccc",
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 8,
  },
  previewText: {
    fontWeight: "600",
    fontSize: 14,
    color: "#f97316",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  textPuller: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default SearchCollections;
