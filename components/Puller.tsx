import React from "react";
import {
  View
} from "react-native";

interface Props {
    children: JSX.Element;
}

export default function PullerDrawer({children} : Props) {

  return (
    <View style={{ flex: 1 }}>
      {children}
    </View>
  );
}

