import React, { useEffect } from 'react';
import { VStack, Button, ButtonText, ButtonIcon, AddIcon, ScrollView, FormControl, FormControlLabel, FormControlLabelText, Input, InputField, FormControlHelper, FormControlHelperText, FormControlError, FormControlErrorIcon, FormControlErrorText, View, Text} from "@gluestack-ui/themed";
import { ScanFace, List, PlusCircle, Swords, AlertCircleIcon} from 'lucide-react-native';
import { AppStackParamList } from 'app/navigators/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, typography} from "app/theme"

type CreateMatchScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'Welcome'
>

export interface CreateMatchScreenProps {
  navigation: CreateMatchScreenNavigationProp;
  currentWeek: number;
}

/**
 * CreateMatchScreen component allows users to create and send new match.
 * @component
 */
export function CreateMatchScreen(props: CreateMatchScreenProps) {
  const [leagueName, setLeagueName] = React.useState<string>("");
  const [week, setWeek] = React.useState<string>("");
  const [teamName, setTeamName] = React.useState<string>("");
  const [createMatchDisabled, setCreateMatchDisabled] = React.useState<boolean>(true);

  useEffect(() => {
    if (leagueName !== "" && week !== "" && teamName !== "") {
      setCreateMatchDisabled(false);
    }
    else {
      setCreateMatchDisabled(true);
    }

  } , [leagueName, week, teamName]);

  const handleLeagueName = (text: string): void => {
    setLeagueName(text);
  }

  const handleWeek = (text: string): void => {
    setWeek(text);
  }


  const handleTeamName = (text: string): void => {
    setTeamName(text);
  }

  return (
    <ScrollView>

      <View
        backgroundColor={colors.background}
        flex={1}
        flexDirection="column"
        // gap={10}
        // alignContent="center"
        alignItems="center"
        // justifyContent="flex-start"
        // paddingTop={60}
        // paddingBottom={60}
        // minHeight="100%"
      
      >
        <Text
          color={colors.text}
          fontSize={32}
          fontFamily={typography.fonts.poppins.bold}
          textAlign="center"
          marginTop={30}
          marginBottom={59}
          marginHorizontal={83}
        >
          Create Match
        </Text>


        <FormControl
          // size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          isRequired={false}
          width="80%"
          gap={31}
        >

          <View>
            <FormControlLabel mb="$1"
              marginHorizontal={30}
            >
              <FormControlLabelText
                  color={colors.text}
                  fontSize={18}
                  fontFamily={typography.fonts.poppins.semiBold}
              >
                League Name
              </FormControlLabelText>
            </FormControlLabel>
            <Input
              marginHorizontal={30}
            >
              <InputField 
                type="text" 
                color={colors.text}
                fontSize={18}
                fontFamily={typography.fonts.poppins.normal}
                placeholder="Enter League Name..." 
                onChangeText={handleLeagueName}
              />
            </Input>
          </View>
          

          <View>
            <FormControlLabel mb="$1"
              marginHorizontal={30}
            >
              <FormControlLabelText
                color={colors.text}
                fontSize={18}
                fontFamily={typography.fonts.poppins.semiBold}
              >
                Week
              </FormControlLabelText>
            </FormControlLabel>
            {/** make default value as the current week */}
            <Input
              marginHorizontal={30}
            >
              <InputField 
                type="text"   
                keyboardType="number-pad"
                color={colors.text}
                fontSize={18}
                fontFamily={typography.fonts.poppins.normal}
                // defaultValue="1" 
                placeholder="Week to play..." 
                maxLength={2}
                onChangeText={handleWeek}

              />
            </Input>
          </View>


          <View>
            <FormControlLabel mb="$1"
              marginHorizontal={30}
            >
              <FormControlLabelText
                color={colors.text}
                fontSize={18}
                fontFamily={typography.fonts.poppins.semiBold}
              >
                Team Name
              </FormControlLabelText>
            </FormControlLabel>
            <Input
              marginHorizontal={30}
            >
              <InputField 
                type="text"   
                color={colors.text}
                fontSize={18}
                fontFamily={typography.fonts.poppins.normal}
                placeholder="Enter your team's name..." 
                onChangeText={handleTeamName}
              />
            </Input>
          </View>

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
            // size="md"
            variant="solid"
            action="primary"
            height={50}
            width={277}
            marginBottom={31}
            borderRadius={50}
            alignSelf='center'
            isDisabled={createMatchDisabled}
          >
            <ButtonText 
              color={colors.text}
              fontSize={18}
              fontFamily={typography.fonts.poppins.medium}
            >
              Create Match 
            </ButtonText>
          </Button>

        </FormControl>
      </View>
    </ScrollView>
  );
};
