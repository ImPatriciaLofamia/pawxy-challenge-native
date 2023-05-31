import React from "react";
import {
  View
} from "react-native";

interface Props {
    children: JSX.Element;
}

export default function Puller({children} : Props) {

  return (
    <View style={{ flex: 1 }}>
      {children}
    </View>
  );
}

