import React from "react";
import { StyleSheet, View } from "react-native";
import { Svg, Line, Defs, Marker, Polyline } from "react-native-svg";
import Animated, { useAnimatedProps } from "react-native-reanimated";

const AnimatedLine = Animated.createAnimatedComponent(Line);

export default function App() {
  const lineAnimatedProps = useAnimatedProps(() => {
    return {
      x1: 50,
      y1: 50,
      x2: 200,
      y2: 200,
      stroke: "rgb(0,0,0)",
      strokeWidth: 10,
      markerEnd: "url(#arrowhead)",
    };
  }, []);

  return (
    <View style={styles.container}>
      <Svg style={{ flex: 1 }}>
        <Defs>
          <Marker
            id="arrowhead"
            markerUnits={"strokeWidth"}
            refX="0"
            refY="0"
            orient="auto"
          >
            <Polyline
              points="-2,-2 0,0 -2,2 0,0"
              stroke="context-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Marker>
        </Defs>
        <AnimatedLine animatedProps={lineAnimatedProps} />
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
