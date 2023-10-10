import React, { useRef } from "react";
import { Image, ImageStyle, ViewStyle, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { LogIn } from "../components/LogIn";

const stinkBallLogo = require("../../assets/images/MainStinkballLogo.png");

export const WelcomeScreen = () => {
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScrollToInput = () => {
    scrollViewRef.current?.scrollTo({ y: 200, animated: true }); // Adjust the y value based on your layout
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={$mainContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Image style={$stinkballLogo} source={stinkBallLogo} resizeMode="contain" />
        <LogIn onPress={handleScrollToInput} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// Styling
const $mainContainer: ViewStyle = {
  backgroundColor: "#1D1D1D",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

const $stinkballLogo: ImageStyle = {
  height: 247,
  width: 309,
}
