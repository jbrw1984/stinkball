import React, { useState } from 'react';
import { View, Input, InputField, FormControl, VStack, Text, InputSlot, InputIcon, Button, ButtonText, Modal, ModalBackdrop, ModalBody, ModalContent, ModalFooter, ModalHeader, Heading } from "@gluestack-ui/themed";
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { typography } from 'app/theme';
import { AppStackParamList } from 'app/navigators/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CreateUserDto } from '../../../api/src/dtos/users.dto';
import {  useStores } from 'app/models';

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

  // State Variables for our modal
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalHeading, setModalHeading] = useState<string>("");
  const [modalMessage, setModalMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  // Access our MOBX State Tree store.
  const rootStore = useStores();

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
      const postUser = async (): Promise<void> => {
        const apiUrl = 'http://localhost:3000/signup';

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

          if (!response.ok) throw new Error('Invalid email or password. Please try again.');
          
          const data = await response.json();
          console.log('Response data:', data);
          

          // Set Modal text to be success.
          setModalHeading("Sign Up: Success");
          setModalMessage("Account created successfully!");
          setSuccess(true);
          setShowModal(true);

          // Delay the execution for 2 seconds 
          setTimeout(() => {
            // Reset state variables to prompt user to now log in
            setSignUp(false);
            handleEmail("");
            handlePassword("");
          }, 2000);
        } catch (error: any) {
          // Set modal text to be error.
          setModalHeading("Sign Up: Failure");
          setModalMessage(error.message);
          setSuccess(false);
          setShowModal(true);

          console.log('Error:', error.message);
        }
      }
      postUser();
    } else {
      const getUser = async (): Promise<void> => {
        try {
          await rootStore.login(email, password);
          navigation.navigate('MatchList');
        } catch (error: any) {
          // If login error Show modal with message.
          setModalHeading("Log In: Failure");
          setModalMessage(error.message);
          setSuccess(false);
          setShowModal(true);
        } 
      }
      getUser();
    }
  }

  const ref = React.useRef(null);
  return (
    <View width="100%" alignItems='center'>
      <FormControl p='$4' width="80%">
        <VStack space='xl'>
          <VStack space='xs'>
            <Text color='$textLight200' lineHeight='$xs' fontFamily={typography.fonts.poppins.normal}>
              Email
            </Text>
            <Input>
              <InputField
                id={"email-field"}
                value={email}
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
                value={password}
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
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false)
        }}
        finalFocusRef={ref}
        size="sm"
      >
        <ModalBackdrop />
        <ModalContent backgroundColor='$secondary950'>
          <ModalHeader>
            <Heading size="lg" color='$white'>
              {modalHeading}
            </Heading>
          </ModalHeader>
          <ModalBody>
            <Text color='$secondary200'>
              {modalMessage}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              size="sm"
              action={success ? "positive" : "negative"}
              mr="$3"
              onPress={() => {
                setShowModal(false)
              }}
            >
              <ButtonText>Ok</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </View> 
  );
};
