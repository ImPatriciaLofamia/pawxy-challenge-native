import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

interface Props {
  thumbnail: string;
  title: string;
  author: string;
  source: string;
  views: string;
  icon: JSX.Element;
}

const VideoCards = ({
  thumbnail,
  title,
  author,
  source,
  views,
  icon,
}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: `${thumbnail}` }} style={styles.thumbnail} />
      <View style={styles.textContainer}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
        <View style={styles.Row}>
          <View style={styles.Row}>
            {icon}
            <Text style={styles.text}>{source}</Text>
          </View>
          <Text style={styles.text}>{views} views</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    padding: 5
  },
  thumbnail: {
    width: '50%',
    height: '100%',
    borderRadius: 6,
  },
  header: {
    fontSize: 16,
    fontWeight: "500",
  },
  textContainer: {
    width: "50%",
    gap: 10,
    padding: 5,
  },
  Row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    gap: 5,
  },
  text: {
    fontSize: 11,
    color: "#9ca3af",
  },
  author: {
    fontSize: 13,
    color: "#d1d5db",
  },
});

export default VideoCards;
