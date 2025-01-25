import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

const DeviceOrientation = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const setupOrientationListener = async () => {
      // Unlock orientation to allow detection
      await ScreenOrientation.unlockAsync();

      // Check initial orientation
      const currentOrientation = await ScreenOrientation.getOrientationAsync();
      console.log("Initial Orientation:", currentOrientation);
      const isLandscapeMode =
        currentOrientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
        currentOrientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT;
      setIsLandscape(isLandscapeMode);

      // Listen for orientation changes
      const orientationListener =
        ScreenOrientation.addOrientationChangeListener((event) => {
          console.log("Orientation Change Event:", event);
          const isLandscapeMode =
            event.orientationInfo.orientation ===
              ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
            event.orientationInfo.orientation ===
              ScreenOrientation.Orientation.LANDSCAPE_RIGHT;
          setIsLandscape(isLandscapeMode);
        });

      // Cleanup listener on component unmount
      return () => {
        ScreenOrientation.removeOrientationChangeListener(orientationListener);
        console.log("Orientation listener removed");
      };
    };

    setupOrientationListener();
  }, []);

  const toggleOrientation = async () => {
    if (isLandscape) {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
      console.log("Orientation locked to Portrait");
    } else {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
      );
      console.log("Orientation locked to Landscape");
    }
    setIsLandscape(!isLandscape);
  };

  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
});

export default DeviceOrientation;
