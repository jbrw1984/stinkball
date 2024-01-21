import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { VStack, HStack, Text, Button, ButtonText, View, EditIcon, Avatar, AvatarBadge, AvatarFallbackText, AvatarImage, Icon, ButtonIcon, Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Heading, Box } from "@gluestack-ui/themed";
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { colors, typography} from "app/theme"
import { AppStackParamList } from 'app/navigators/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const WINDOW_WIDTH = Dimensions.get('window').width;

type MatchDetailsScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'MatchDetails'
>

interface PlayerHeadToHeadProps {
  navigation: MatchDetailsScreenNavigationProp;
  position: string; 
  player1Name: string; 
  player2Name: string;
  player1NameShort: string;
  player2NameShort: string;
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
  "qb": "#FFC107", 
  "rb": "#4CAF50", 
  "wr": "#2196F3", 
  "te": "#9C27B0", 
  "k": "#FF9800", 
  "dst": "#F44336"
}

/**
 * Component that displays a head to head comparison of two NFL players of the same position. 
 * 
 * @param props 
 * @returns 
 */
export function PlayerHeadToHead(props: PlayerHeadToHeadProps){

  return (
    <View
      flexDirection={"row"}
      width={"100%"}
      height={49}
      backgroundColor={colors.secondaryBackground}

      alignItems={"center"}
      justifyContent={"space-around"}
      position={"relative"}
      borderRadius={5}
      // boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
      paddingLeft={10}
      paddingRight={10}
      marginTop={5}
      marginBottom={5}
    >

{/**---------------------------------------------------------------- */}

      <View
        flexDirection={"column"}
        alignItems={"flex-start"}

        position="absolute" 
        // Must use left instead of right margin
        // Because want component's LHS to alwasy line up
        left={8} 

      >
        <Text
          color={colors.text}
          textAlign='center'
          fontFamily={typography.fonts.poppins.semiBold}
          fontSize={14}
        >
          {props.player1NameShort}
        </Text>
        <Text
          color={colors.text}
          textAlign='center'
          fontFamily={typography.fonts.poppins.normal}
          fontSize={10}
        >
          {props.player1TeamCityShort} • {props.position.toUpperCase()}
        </Text>
      </View>

{/**---------------------------------------------------------------- */}

      <Text
        color={colors.text}
        textAlign='center'
        fontFamily={typography.fonts.poppins.semiBold}
        fontSize={17}
        marginHorizontal={8}

        position="absolute" 
        // Must use right instead of left margin
        // Because want this score's right hand side to always be 72.5 pixels from the center
        right={WINDOW_WIDTH / 2 - 22.5 + 50} 

      >
        {props.player1Points}
      </Text>

{/**---------------------------------------------------------------- */}

      <Box
        bg={positionColors[props.position]}
        h={45}
        w={45}
        borderRadius={10}

        position="absolute" // Set the position component's position to absolute
        left={WINDOW_WIDTH / 2 - 22.5} // Calculate the left margin to center the position component
        right={WINDOW_WIDTH / 2 - 22.5} // Calculate the right margin to center the position component    

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
          {props.position.toUpperCase()}
        </Text>
      </Box>

{/**---------------------------------------------------------------- */}

      <Text
        color={colors.text}
        textAlign='center'
        fontFamily={typography.fonts.poppins.semiBold}
        fontSize={17}
        marginHorizontal={8}

        position="absolute" 
        // Must use left instead of right margin
        // Because want this score's left hand side to always be 72.5 pixels from the center
        left={WINDOW_WIDTH / 2 - 22.5 + 50} 

      >
        {props.player2Points}
      </Text>

{/**---------------------------------------------------------------- */}

      <View
        flexDirection={"column"}
        alignItems={"flex-end"}

        position="absolute" 
        // Must use right instead of left margin
        // Because want component's RHS to alwasy line up
        right={8} 

      >
        <Text
          color={colors.text}
          textAlign='center'
          fontFamily={typography.fonts.poppins.semiBold}
          fontSize={14}
        >
          {props.player2NameShort}
        </Text>
        <Text
          color={colors.text}
          textAlign='center'
          fontFamily={typography.fonts.poppins.normal}
          fontSize={10}
        >
          {props.player2TeamCityShort} • {props.position.toUpperCase()}
        </Text>
      </View>

{/**---------------------------------------------------------------- */}

    </View>
    
  );
};
