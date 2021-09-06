import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCog, faToolbox } from "@fortawesome/free-solid-svg-icons";

const index = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.backgroundImage}
      />
      {/* Header */}
      <View style={styles.header}>
        <FontAwesomeIcon style={styles.icon} icon={faCog} size={24} />
        <Text style={styles.headerTitle}>My Model S</Text>
        <FontAwesomeIcon style={styles.icon} icon={faToolbox} size={24} />
      </View>
    </View>
  );
};

export default index;
