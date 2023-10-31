import React, { useRef } from "react";
import { Image, ImageStyle, ViewStyle, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { LogIn } from "../components/LogIn";
import { useNavigation } from "@react-navigation/native";
const stinkBallLogo = require("../../assets/images/MainStinkballLogo.png");

export const WelcomeScreen = () => {
  const scrollViewRef = useRef<ScrollView>(null);

  const navigation = useNavigation();

  const handleScrollToInput = () => {
    scrollViewRef.current?.scrollTo({ y: 200, animated: true }); // Adjust the y value based on your layout
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={$mainContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Image style={$stinkballLogo} source={stinkBallLogo} resizeMode="contain" />
        <LogIn onPress={handleScrollToInput} navigation={navigation}/>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// Styling
const $mainContainer: ViewStyle = {
  paddingBottom: 30,
  backgroundColor: "#1D1D1D",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  gap: 25,
}

const $stinkballLogo: ImageStyle = {
  height: 247,
  width: 309,
}
