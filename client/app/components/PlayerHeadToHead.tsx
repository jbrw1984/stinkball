import React, { useState } from 'react';
import { VStack, HStack, Text, Button, ButtonText, View, EditIcon, Avatar, AvatarBadge, AvatarFallbackText, AvatarImage, Icon, ButtonIcon, Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Heading, Box } from "@gluestack-ui/themed";
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { colors, typography} from "app/theme"
import { AppStackParamList } from 'app/navigators/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type MatchDetailsScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'MatchDetails'
>

interface PlayerHeadToHeadProps {
  navigation: MatchDetailsScreenNavigationProp;
  position: string; 
  player1Name: string; 
  player2Name: string;
  player1TeamCityShort: string; 
  player2TeamCityShort: string;
  player1Points: number;
  player2Points: number;
  player1Portrait: string; 
  player2Portrait: string; 
}

type PositionColors = {
  [key: string]: string;
};

const positionColors: PositionColors = {
  "QB": "#FFC107", 
  "RB": "#4CAF50", 
  "WR": "#2196F3", 
  "TE": "#9C27B0", 
  "K": "#FF9800", 
  "DST": "#F44336"
}

/**
 * Component that displays a head to head comparison of two NFL players of the same position. 
 * 
 * @param props 
 * @returns 
 */
export function PlayerHeadToHead(props: PlayerHeadToHeadProps){
  const [avatar, setAvatar] = useState<string>(""); 


  /**
   * Function to select an avatar and close the modal. 
   */
  const handleSelectAvatar = (avatarLink: string): void => {
  }

  return (
    <View
      flexDirection={"row"}
      width={"100%"}
      height={49}
      backgroundColor={colors.secondaryBackground}

      alignItems={"center"}
      justifyContent={"space-around"}
      borderRadius={5}
      // boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
      paddingLeft={10}
      paddingRight={10}
    >

{/**---------------------------------------------------------------- */}

      <View
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"center"}
      >
        <Text
          color={colors.text}
          textAlign='center'
          fontFamily={typography.fonts.poppins.semiBold}
          fontSize={14}
        >
          {props.player1Name}
        </Text>
        <Text
          color={colors.text}
          textAlign='center'
          fontFamily={typography.fonts.poppins.normal}
          fontSize={10}
        >
          {props.player1TeamCityShort} • {props.position}
        </Text>
      </View>

{/**---------------------------------------------------------------- */}

      <Text
        color={colors.text}
        textAlign='center'
        fontFamily={typography.fonts.poppins.semiBold}
        fontSize={17}
      >
        {props.player1Points}
      </Text>

{/**---------------------------------------------------------------- */}

      <Box
        bg={positionColors[props.position]}
        h={45}
        w={45}
        borderRadius={10}
        display="flex"
        justifyContent="center" 
        alignItems="center" 
      >
        <Text
          color={colors.textBlack}
          textAlign='center'
          fontFamily={typography.fonts.poppins.semiBold}
          fontSize={20}
        >
          {props.position}
        </Text>
      </Box>

{/**---------------------------------------------------------------- */}

      <Text
        color={colors.text}
        textAlign='center'
        fontFamily={typography.fonts.poppins.semiBold}
        fontSize={17}
      >
        {props.player2Points}
      </Text>

{/**---------------------------------------------------------------- */}

      <View
        flexDirection={"column"}
        alignItems={"flex-end"}
        justifyContent={"center"}
      >
        <Text
          color={colors.text}
          textAlign='center'
          fontFamily={typography.fonts.poppins.semiBold}
          fontSize={14}
        >
          {props.player2Name}
        </Text>
        <Text
          color={colors.text}
          textAlign='center'
          fontFamily={typography.fonts.poppins.normal}
          fontSize={10}
        >
          {props.player2TeamCityShort} • {props.position}
        </Text>
      </View>

{/**---------------------------------------------------------------- */}

    </View>
    

    // <View 
    //   flex={1}
    //   flexDirection={"row"}
    //   // width={"100%"}
    //   width={20}
    //   height={20}
    //   backgroundColor={colors.secondaryBackground}

    // >
    //   {/* <Text>
    //     Hello
    //   </Text> */}
    // </View>
  );
};
