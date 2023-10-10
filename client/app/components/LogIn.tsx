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
      borderWidth='$1'
      borderRadius='$lg'
      borderColor='$borderLight300'
      sx={{
        _dark:{
          borderWidth:'$1', borderRadius:'$lg', borderColor:'$borderDark800'
        }
      }}
    >
      <VStack space='xl'>
        <Heading color='$text900' lineHeight='$md'>
          Login
        </Heading>
        <VStack space='xs'>
          <Text color='$text500' lineHeight='$xs'>
            Email
          </Text>
          <Input>
            <InputField
              type="text"
            />
          </Input>
        </VStack>
        <VStack space='xs'>
          <Text color='$text500' lineHeight='$xs'>
            Password
          </Text>
          <Input textAlign='center'>
            <InputField
              type={showPassword ? 'text' : 'password'}
            />
            <InputSlot pr='$3' onPress={handleState}>
              {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
              <InputIcon as={showPassword ? EyeIcon : EyeOffIcon}  color='$darkBlue500'/>
            </InputSlot>
          </Input>
        </VStack>
        <Button
          ml='auto'
          onPress={()=>{
            setShowModal(false);
          }}
        >
          <ButtonText color='$white'>
            Save
          </ButtonText>
        </Button>
      </VStack>
    </FormControl>
  );
}



// Styling
const $mainContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  backgroundColor: "#1D1D1D",
  alignItems: "center",
  gap: 50,
  paddingBottom: 100,
}

const $inputContainer: ViewStyle = {
  flex: 1,
  gap: 15,
  width: "90%"
  
}

const $stinkBallLogo: ImageStyle = {
  height: 247,
  width: 309,
}