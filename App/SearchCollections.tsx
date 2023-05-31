import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Linking,
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

const Navigation = ({ currentPage, handlePagination }) => {
  return (
    <View style={styles.navigationContainer}>
      <TouchableOpacity
        style={styles.navigationButton}
        onPress={() => handlePagination("previous")}
      >
        <Text style={styles.navigationButtonText}>Previous</Text>
      </TouchableOpacity>
      <Text style={styles.currentPageText}>{currentPage}</Text>
      <TouchableOpacity
        style={styles.navigationButton}
        onPress={() => handlePagination("next")}
      >
        <Text style={styles.navigationButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const Keyword = () => {
  return (
    <TouchableOpacity>
      <View style={styles.keyword}>
        <Ionicons name="search" size={16} color="#0284c7" />
        <Text style={{ color: "#0284c7" }}>Search keyword on Google</Text>
      </View>
    </TouchableOpacity>
  );
};

export const SearchCollections = () => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const openPreview = (videoId) => {
    setSelectedVideoId(videoId);
  };

  const closePreview = () => {
    setSelectedVideoId(null);
  };

  const handlePagination = (action) => {
    if (action === "previous") {
      const newPage = currentPage - 1;
      if (newPage > 0) {
        setCurrentPage(newPage);
      }
    } else if (action === "next") {
      setCurrentPage(currentPage + 1);
    }
  };

  const itemsPerPage = 4;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleItems = collectionData.slice(startIndex, endIndex);

  return (
    <View style={styles.container}>
      <StickyHeader />
      <FlatList
        data={visibleItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.collection}>
            <VideoCards
              onPress={() => openPreview(item.id)}
              thumbnail={item.thumbnail}
              title={item.title}
              author={item.author}
              icon={item.icon}
              source={item.source}
              views={item.views}
            />
          </View>
        )}
        ListFooterComponent={() => (
          <TouchableOpacity onPress={handlePagination}>
            <View style={styles.loadMoreButton}></View>
          </TouchableOpacity>
        )}
      />
      <Navigation
        currentPage={currentPage}
        handlePagination={handlePagination}
      />

      <Keyword />
      {selectedVideoId && (
        <Puller>
          <View style={styles.pullercontainer}>
            <View style={styles.puller} />
            <Text style={styles.previewText}>Preview</Text>
            <Image
              // source={{ uri: "https://picsum.photos/536/354" }}
              source={{
                uri: `https://picsum.photos/id/${selectedVideoId}/536/354`,
              }}
              style={{ height: 200, backgroundColor: "#f2f2f2", marginTop: 16 }}
            />
            <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 16 }}>
              {
                collectionData.find((item) => item.id === selectedVideoId)
                  ?.title
              }
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
              <Text style={{ marginRight: 8 }}>
                {
                  collectionData.find((item) => item.id === selectedVideoId)
                    ?.author
                }
              </Text>
              <Text>
                {
                  collectionData.find((item) => item.id === selectedVideoId)
                    ?.views
                }{" "}
                views
              </Text>
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
                  const youtubeURL = `https://www.youtube.com/watch?v=${selectedVideoId}`;
                  Linking.openURL(youtubeURL);
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
        </Puller>
      )}
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
  loadMoreButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
  loadMoreButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3b82f6",
  },
  navigationContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 15,
    backgroundColor: "#fff",
  },
  navigationButton: {
    backgroundColor: "#3b82f6",
    padding: 10,
    width: "25%",
    borderRadius: 24,
    paddingHorizontal: 16,
  },
  navigationButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
  currentPageText: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default SearchCollections;
