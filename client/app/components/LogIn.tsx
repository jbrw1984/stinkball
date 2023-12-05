import React, { useState } from 'react';
import { Input, InputField, FormControl, VStack, Text, InputSlot, InputIcon, Button, ButtonText } from "@gluestack-ui/themed";
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { typography } from 'app/theme';
import { AppStackParamList } from 'app/navigators/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CreateUserDto } from '../../../api/src/dtos/users.dto';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'Welcome'
>

interface LogInProps {
  onPress: () => void;
  navigation: WelcomeScreenNavigationProp;
}

export const LogIn: React.FC<LogInProps> = ({ onPress, navigation }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [signUp, setSignUp] = useState<boolean>(false);
  // State variables for disabling login button.
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


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

  const handleEmail = (text: string): void => {
    setEmail(text);
    checkIsDisabled(text, password);
  }

  const handlePassword = (text: string): void => {
    setPassword(text);
    checkIsDisabled(email, text);
  }

  const checkIsDisabled = (newEmail: string, newPassword: string): void => {
    setDisableButton(!newEmail || !newPassword);
  }

  const authenticateUser = (): void => {
    if (signUp) {

      const postUser = async () => {
        const apiUrl = 'http://localhost:3000/users';

        const newUser: CreateUserDto = {
          email: email,
          password: password,
        };

        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log('Response data:', data);
        } catch (error: any) {
          console.error('Error:', error.message);
        }
      }
      postUser();
    } else {
      navigation.navigate('MatchList');
    }
  }
  return (
    <FormControl p='$4' width="80%">
      <VStack space='xl'>
        <VStack space='xs'>
          <Text color='$textLight200' lineHeight='$xs' fontFamily={typography.fonts.poppins.normal}>
            Email
          </Text>
          <Input>
            <InputField
              id={"email-field"}
              onChangeText={handleEmail}
              fontFamily={typography.fonts.poppins.light}
              color="$white"
              type="text"
              placeholder='Enter your email...'
            />
          </Input>
        </VStack>
        <VStack space='xs'>
          <Text color='$textLight200' lineHeight='$xs' fontFamily={typography.fonts.poppins.normal}>
            Password
          </Text>
          <Input>
            <InputField
              id={"password-field"}
              onChangeText={handlePassword}
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
        <Button action="primary" onPress={authenticateUser} isDisabled={disableButton}>
          <ButtonText color='$white' fontFamily={typography.fonts.poppins.semiBold}>
            {signUp ? "Sign Up" : "Log In"}
          </ButtonText>
        </Button>
      </VStack>
    </FormControl>
  );
};
