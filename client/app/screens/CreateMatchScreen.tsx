import React from 'react';
import { VStack, Button, ButtonText, ButtonIcon, AddIcon, ScrollView, FormControl, FormControlLabel, FormControlLabelText, Input, InputField, FormControlHelper, FormControlHelperText, FormControlError, FormControlErrorIcon, FormControlErrorText, View } from "@gluestack-ui/themed";
import { ScanFace, List, PlusCircle, Swords, AlertCircleIcon} from 'lucide-react-native';
import { typography } from 'app/theme';
import { AppStackParamList } from 'app/navigators/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from "app/theme"

type CreateMatchScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'Welcome'
>

export interface CreateMatchScreenProps {
  navigation: CreateMatchScreenNavigationProp;
}

/**
 * CreateMatchScreen component allows users to create and send new match.
 * @component
 */
export function CreateMatchScreen(props: CreateMatchScreenProps) {

  return (
    <ScrollView>

      <View
        backgroundColor={colors.background}
        flex={1}
        flexDirection="column"
        gap={10}
        alignContent="center"
        alignItems="center"
        justifyContent="flex-start"
        paddingTop={60}
        paddingBottom={60}
        minHeight="100%"
      
      >
      <FormControl
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          isRequired={false}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText
              
            >League Name</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField type="text" placeholder="Enter League Name..." />
          </Input>


          <FormControlLabel mb="$1">
            <FormControlLabelText>Week</FormControlLabelText>
          </FormControlLabel>
          {/** make default value as the current week */}
          <Input>
            <InputField type="text" defaultValue="1" placeholder="Week to play..." />
          </Input>


          <FormControlLabel mb="$1">
            <FormControlLabelText>Team Name</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField type="text" placeholder="Enter your team's name..." />
          </Input>

          {/* <FormControlHelper>
            <FormControlHelperText>
              Must be at least 6 characters.
            </FormControlHelperText>
          </FormControlHelper>

          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              At least 6 characters are required.
            </FormControlErrorText>
          </FormControlError> */}

          <Button
            size="md"
            variant="solid"
            action="primary"
            marginHorizontal={20}
          >
            <ButtonText fontFamily={typography.fonts.poppins.medium}>Create Match </ButtonText>
          </Button>

        </FormControl>






      </View>

      
    </ScrollView>

  );
};
