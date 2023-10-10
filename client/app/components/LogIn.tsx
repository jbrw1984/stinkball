import React, { useState } from 'react';
import { Input, InputField, FormControl, VStack, Text, InputSlot, InputIcon, Button, ButtonText } from "@gluestack-ui/themed";
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';

interface LogInProps {
  onPress: () => void;
}

export const LogIn: React.FC<LogInProps> = ({ onPress }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [signUp, setSignUp] = useState<boolean>(false);

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  const handleType = () => {
    setSignUp((typeState) => {
      return !typeState;
    });
  }

  return (
    <FormControl p='$4' width="80%">
      <VStack space='xl'>
        <VStack space='xs'>
          <Text color='$textLight200' lineHeight='$xs'>
            Email
          </Text>
          <Input>
            <InputField
              type="text"
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
              type={showPassword ? 'text' : 'password'}
              placeholder='Enter your password...'
            />
            <InputSlot pr='$3' onPress={handleState}>
              <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} color='$darkBlue500' />
            </InputSlot>
          </Input>
          <Text color='$textLight300' ml="auto" onPress={handleType}  underline={true}>
            {signUp ? "Or Log In?" : "Or Create Account?"}
          </Text>
        </VStack>
        <Button action="primary">
          <ButtonText color='$white'>
            {signUp ? "Sign Up" : "Log In"}
          </ButtonText>
        </Button>
      </VStack>
    </FormControl>
  );
};
