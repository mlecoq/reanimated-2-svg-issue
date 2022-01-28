import React from "react";
import { StyleSheet, View } from "react-native";
import { Svg, Rect } from "react-native-svg";
import Animated, { useAnimatedProps } from "react-native-reanimated";

const AnimatedRectangle = Animated.createAnimatedComponent(Rect);

export default function App() {
  const rectangleAnimatedProps = useAnimatedProps(() => {
    return {
      x: 10,
      y: 10,
      width: 50,
      height: 50,
      stroke: "rgb(0, 0, 0)",
      fill: "none",
      strokeWidth: 1,
    };
  }, []);

  return (
    <View style={styles.container}>
      <Svg style={{ flex: 1 }}>
        <AnimatedRectangle animatedProps={rectangleAnimatedProps} />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
