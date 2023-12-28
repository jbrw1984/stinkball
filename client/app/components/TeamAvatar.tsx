import React, { useState } from 'react';
import { VStack, HStack, Text, Button, ButtonText, View, EditIcon, Avatar, AvatarBadge, AvatarFallbackText, AvatarImage, Icon, ButtonIcon, Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Heading } from "@gluestack-ui/themed";
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { colors, typography} from "app/theme"
import { AppStackParamList } from 'app/navigators/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type CreateMatchScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'Welcome'
>

interface TeamAvatarProps {
  navigation: CreateMatchScreenNavigationProp;
  height: number; 
  width: number; 
}

// https://github.com/alohe/avatars
// TODO: in future, can look for more football related avatars
const AVATAR_LIST : string[] = [
  'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_1.png', 
  'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_2.png', 
  'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_3.png', 
  'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_4.png', 
  'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_5.png', 
  'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_6.png', 
  'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_7.png', 
  'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_8.png', 
  'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_9.png', 
  'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_10.png', 
  'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_11.png', 
  'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_12.png'
]

/**
 * Component that displays an avatar for their team and allows users 
 * to select their own team avatar. Uses modal component that activates
 * when user taps on profile. 
 * 
 * @param props Contains height/width because will reuse 
 *              component for future screens.
 * @returns 
 */
export function TeamAvatar(props: TeamAvatarProps){
  const [showModal, setShowModal] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<string>(AVATAR_LIST[0]); 

  const SELECT_AVATAR_DIM = 90; 

  /**
   * Function to select an avatar and close the modal. 
   */
  const handleSelectAvatar = (avatarLink: string): void => {
    setAvatar(avatarLink); 
    setShowModal(false); 
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
        <Button
          height={props.height}
          width={props.width}
          borderRadius={50}
          onPress={() => setShowModal(true)}
        >
          <Avatar
            height={props.height}
            width={props.width}
            borderColor={colors.text}
            borderWidth={2}
          >
            <AvatarFallbackText>Avatar</ AvatarFallbackText>
            <AvatarImage 
              source={{
                uri: avatar
              }}
              alt='Avatar'
            />
          </Avatar>
        </Button>

        <Button
          bg='transparent'
          // I feel like there's a better way to code this positioning...
          position='absolute'
          right={-1 * props.width / 2}
          onPress={() => setShowModal(true)}
        >
          <ButtonIcon 
            as={EditIcon} 
            color={colors.text}
            size='xl'
          />  
        </Button>
      </View>

      <Modal
        isOpen={showModal}
      >
        <ModalBackdrop />

        <ModalContent
          bgColor={colors.secondaryBackground}
        >
          <ModalHeader>
            <Heading
              color={colors.text}
              fontSize={18}
              fontFamily={typography.fonts.poppins.semiBold}
            >
              Choose a team avatar: 
            </Heading>
          </ModalHeader>

          <ModalBody>
            <View
              display='flex'
              flexDirection='row'
              flexWrap='wrap'
              justifyContent='space-between'
              rowGap={10}
            >
              {AVATAR_LIST.map((avatarLink, index) => (
                <Button
                  key={index}
                  height={SELECT_AVATAR_DIM}
                  width={SELECT_AVATAR_DIM}
                  borderRadius={50}
                  onPress={() => handleSelectAvatar(avatarLink)}
                >
                  <Avatar
                    height={SELECT_AVATAR_DIM}
                    width={SELECT_AVATAR_DIM}
                    borderColor={colors.text}
                    borderWidth={2}
                  >
                    <AvatarFallbackText>Stinkball</ AvatarFallbackText>
                    <AvatarImage 
                      source={{
                        uri: avatarLink
                      }}
                      alt='avatar'
                    />
                  </Avatar>
                </Button>
              ))}
            </View>
          </ModalBody >
          <ModalFooter>
            <Button
              size='sm'
              action='positive'
              borderWidth="$0"
              onPress={() => setShowModal(false)}
            >
              <ButtonText
                color={colors.text}
                fontSize={18}
                fontFamily={typography.fonts.poppins.medium}
              >
                Close
              </ButtonText>
            </Button>
          </ ModalFooter>
        </ModalContent>

      </Modal>
    </View>
  );
};
