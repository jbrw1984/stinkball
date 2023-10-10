import React, { useState } from 'react';
import { View, ViewStyle, Image, ImageStyle } from "react-native";
import { Input, InputField, FormControl, VStack, Heading, Text, InputSlot, InputIcon, Button, ButtonText,  } from "@gluestack-ui/themed";
const stinkBallLogo = require("../../assets/images/MainStinkballLogo.png");
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';



export const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  return (
    <FormControl
      p='$4'
      width="80%"
    >
      <VStack space='xl' >
        <VStack space='xs' >
          <Text color='$textLight200' lineHeight='$xs'>
            Email
          </Text>
          <Input>
            <InputField
              type="text"
              color="$textLight300"
              placeholder='Enter your username...'
            />
          </Input>
        </VStack>
        <VStack space='xs'>
          <Text color='$textLight200' lineHeight='$xs'>
            Password
          </Text>
          <Input>
            <InputField
              color="$textLight300"
              type={showPassword ? 'text' : 'password'}
              placeholder='Enter your password...'
            />
            <InputSlot pr='$3' onPress={handleState}>
              {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
              <InputIcon as={showPassword ? EyeIcon : EyeOffIcon}  color='$darkBlue500'/>
            </InputSlot>
          </Input>
        </VStack>
        <Button
          ml='auto'
        
        >
          <ButtonText color='$white'>
            Login
          </ButtonText>
        </Button>
      </VStack>
    </FormControl>
  );
}
