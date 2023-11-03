import { Pressable, Image, View, Text, ViewStyle, TextStyle, ImageStyle } from "react-native";
const team1Logo = require("../../assets/images/team-image-1.png");
const team2Logo = require("../../assets/images/team-image-2.png");

export const MatchScorePreview = () => {
  return (
    <Pressable style={$mainContainer}>
      <Image style={$teamLogo} source={team1Logo} resizeMode="contain"/>
      <View style={{minWidth: 85, maxWidth: 85, gap: 15, paddingRight: 5, marginLeft: -10}}>
        <Text style={{textAlign: "right", color: "#E9E9E9", fontSize: 12, fontWeight: "bold"}}>TEAMNAME</Text>
        <Text style={{textAlign: "right", color: "white", fontSize: 18, fontWeight: "800"}}>124.72</Text>
        <Text style={{textAlign: "right", color: "#E2E2E2", fontSize: 10}}>@username</Text>
      </View>
      <View style={$vsContainer}>
        <Text style={$vsTextStyle}>VS</Text>
      </View>
      <View style={{minWidth: 85, maxWidth: 85, gap: 15, paddingLeft: 5, marginRight: -10}}>
        <Text style={{color: "white", fontSize: 12, fontWeight: "bold"}}>TEAMNAME</Text>
        <Text style={{color: "white", fontSize: 18, fontWeight: "800"}}>114.52</Text>
        <Text style={{color: "white", fontSize: 10}}>@username</Text>
      </View>

      <Image style={$teamLogo} source={team2Logo} resizeMode="contain"/>
    </Pressable>
  )
}

const $mainContainer: ViewStyle = {
  height: 100,
  width: 330,
  maxHeight: 100,
  backgroundColor: "#1D1D1D",
  borderRadius: 10,
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  padding: 5
}

const $teamLogo: ImageStyle = {
  height: 60,
  width: 60,
  borderWidth: 1.5,
  borderColor: "#745EFF",
  borderRadius: 90,
}

const $vsContainer: ViewStyle = {
  height: 40,
  width: 40,
  backgroundColor: "white",
  borderRadius: 90,
  flexDirection: "row",
  justifyContent: "center"
}

const $vsTextStyle: TextStyle = {
  color: "#745EFF",
  fontWeight: "bold",
  fontSize: 20,
  alignSelf: "center",
}