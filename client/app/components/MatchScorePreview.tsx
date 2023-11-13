import { Pressable, Image, View, Text, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { MatchScorePreviewType } from "./MatchScorePreviewTempData/MatchScorePreviewData";
import { typography } from "app/theme";

// Mock interface this way we save time when linking up client and api.
interface MatchScorePreviewProps {
  matchDetails: MatchScorePreviewType;
}

export const MatchScorePreview: React.FC<MatchScorePreviewProps> = ({ matchDetails }) => {
  {/* Each component gets its data from the matchDetails prop */}
  return (
    <Pressable style={$mainContainer}>
      <Image style={$teamLogo} source={matchDetails.team1ImageSource} resizeMode="contain"/>
      <View style={[$detailsContainer, {paddingRight: 5, marginLeft: -10}]}>
        {/* Need to change so text overflows */}
        <Text style={[$teamNameTextStyle, {textAlign: "right"}]} numberOfLines={1}>{matchDetails.team1Name}</Text>
        <Text style={[$scoreTextStyle, {textAlign: "right"}]}>{matchDetails.team1Score}</Text>
        <Text style={[$usernameTextStyle, {textAlign: "right"}]} numberOfLines={1}>@{matchDetails.team1Username}</Text>
      </View>
      <View style={$vsContainer}>
        <Text style={$vsTextStyle}>VS</Text>
      </View>
      <View style={[$detailsContainer, {paddingLeft: 5, marginRight: -10}]}>
        <Text style={$teamNameTextStyle} numberOfLines={1}>{matchDetails.team2Name}</Text>
        <Text style={$scoreTextStyle}>{matchDetails.team2Score}</Text>
        <Text style={$usernameTextStyle} numberOfLines={1}>@{matchDetails.team2Username}</Text>
      </View>
      <Image style={$teamLogo} source={matchDetails.team2ImageSource} resizeMode="contain"/>
    </Pressable>
  )
}

// Styling
const $mainContainer: ViewStyle = {
  height: 120,
  width: 330,
  maxHeight: 120,
  backgroundColor: "#1D1D1D",
  borderRadius: 20,
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  padding: 5
}

const $detailsContainer: ViewStyle = {
  minWidth: 85, 
  maxWidth: 85, 
  gap: 20,
}

const $teamNameTextStyle: TextStyle = {
  color: "#E9E9E9", 
  fontSize: 12, 
  fontFamily: typography.fonts.poppins.semiBold,
}

const $scoreTextStyle: TextStyle = {
  color: "white", 
  fontSize: 18, 
  fontFamily: typography.fonts.poppins.bold,
}

const $usernameTextStyle: TextStyle = {
  color: "#E2E2E2", 
  fontSize: 12,
  fontFamily: typography.fonts.poppins.normal,
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
  fontFamily: typography.fonts.poppins.bold,
  fontSize: 20,
  alignSelf: "center",
}