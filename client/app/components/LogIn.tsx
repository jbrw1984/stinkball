import React, { useState } from 'react';
import { Input, InputField, FormControl, VStack, Text, InputSlot, InputIcon, Button, ButtonText } from "@gluestack-ui/themed";
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { typography } from 'app/theme';

interface LogInProps {
  onPress: () => void;

  // Fix typing later.
  navigation: any;
}

export const LogIn: React.FC<LogInProps> = ({ onPress, navigation }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [signUp, setSignUp] = useState<boolean>(false);

  const handleState = () => {
    // When user changes from viewing password to displaying password flip showState
    setShowPassword((showState) => {
      return !showState;
    });
  };

  const handleType = () => {
    // When user changes from login to signup screen flip typeState
    setSignUp((typeState) => {
      return !typeState;
    });
  }

  return (
    <FormControl p='$4' width="80%">
      <VStack space='xl'>
        <VStack space='xs'>
          <Text color='$textLight200' lineHeight='$xs' fontFamily={typography.fonts.poppins.normal}>
            Username
          </Text>
          <Input isRequired={true}>
            <InputField
              fontFamily={typography.fonts.poppins.light}
              color="$white"
              type="text"
              placeholder='Enter your username...'
            />
          </Input>
        </VStack>
        <VStack space='xs'>
          <Text color='$textLight200' lineHeight='$xs' fontFamily={typography.fonts.poppins.normal}>
            Password
          </Text>
          <Input isRequired={true}>
            <InputField
              fontFamily={typography.fonts.poppins.light}
              color='$white'
              type={showPassword ? 'text' : 'password'}
              placeholder='Enter your password...'
            />
            <InputSlot pr='$3' onPress={handleState}>
              <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} color='$darkBlue500' />
            </InputSlot>
          </Input>
          <Text 
            color='$textLight300' 
            ml="auto" 
            onPress={handleType}  
            underline={true} 
            fontFamily={typography.fonts.poppins.normal}
          >
            {signUp ? "Or Log In?" : "Or Create Account?"}
          </Text>
        </VStack>
        {/* When user logs in or signs up send them to MatchList screen (we will add validation later) */}
        <Button action="primary" onPress={() => navigation.navigate('MatchList')}>
          <ButtonText color='$white' fontFamily={typography.fonts.poppins.semiBold}>
            {signUp ? "Sign Up" : "Log In"}
          </ButtonText>
        </Button>
      </VStack>
    </FormControl>
  );
};
