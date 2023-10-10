import React, { useState } from 'react';
import { Input, InputField, FormControl, VStack, Text, InputSlot, InputIcon, Button, ButtonText } from "@gluestack-ui/themed";
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';

interface LogInProps {
  onPress: () => void;
}

export const LogIn: React.FC<LogInProps> = ({ onPress }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

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
              <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} color='$darkBlue500' />
            </InputSlot>
          </Input>
        </VStack>
        <Button ml='auto'>
          <ButtonText color='$white'>
            Login
          </ButtonText>
        </Button>
      </VStack>
    </FormControl>
  );
};
