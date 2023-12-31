import React from "react";
import { View, Text } from "react-native";

import styles from "./specifics.style";

const Specifics = ({ points, title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <View style={styles.pointsContainer}>
        {points?.map((item, index) => (
          <View style={styles.pointWrapper} key={item + index}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
