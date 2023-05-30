import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View, TextInput } from "react-native";

export const SearchBar = () => {
  return (
    <View style={styles.component}>
      <TextInput placeholder="Search here..." style={styles.textInput} />
      <Ionicons name="search" size={20} color="#9ca3af" />
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    gap: 10,
    width: "100%",
    flexDirection: "row",
    borderWidth: 1,
    borderRightColor: "#fcd34d",
    borderLeftColor: "#f59e0b",
    borderBottomColor: "#84cc16",
    borderTopColor: "#0284c7",
    borderRadius: 8,
    textAlign: "left",
    padding: 10,
    alignItems: "center",
  },
  textInput: {
    width: "90%",
    fontSize: 18
  },
});

export default SearchBar;
