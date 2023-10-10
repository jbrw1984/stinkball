import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { LogIn } from "../components/LogIn";

const stinkBallLogo = require("../../assets/images/MainStinkballLogo.png");

export const WelcomeScreen = () => {
  return (
    <View style={$mainContainer}>
      <Image style={$stinkballLogo} source={stinkBallLogo} resizeMode="contain" />
      <LogIn />
    </View>
      
  )
}

// Styling
const $mainContainer: ViewStyle = {
  backgroundColor: "#1D1D1D",
  flex: 1,
  gap: 15,
  justifyContent: "center",
  alignItems: "center",
}

const $inputContainer: ViewStyle = {
  flex: 1,
  gap: 15,
  width: "90%"
  
}

const $stinkballLogo: ImageStyle = {
  height: 247,
  width: 309,
}
