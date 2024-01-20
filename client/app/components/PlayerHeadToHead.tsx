import React, { useState } from 'react';
import { VStack, HStack, Text, Button, ButtonText, View, EditIcon, Avatar, AvatarBadge, AvatarFallbackText, AvatarImage, Icon, ButtonIcon, Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Heading } from "@gluestack-ui/themed";
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
  challengerTeamPlayer: string; 
  participantTeamPlayer: string; 

}


/**
 * 
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
    <View>
      <View
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        position='relative'
      >
      </View>

    </View>
  );
};
