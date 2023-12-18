import React, { useEffect } from 'react';
import { Button, ButtonText, ScrollView, FormControl, FormControlLabel, FormControlLabelText, Input, InputField, View, Text} from "@gluestack-ui/themed";
import { AppStackParamList } from 'app/navigators/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, typography} from "app/theme"

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
  const [leagueName, setLeagueName] = React.useState<string>("");
  const [week, setWeek] = React.useState<string>("");
  const [teamName, setTeamName] = React.useState<string>("");
  const [createMatchDisabled, setCreateMatchDisabled] = React.useState<boolean>(true);
  const NFL_WEEKS = 18;

  // TODO: Allow matches for current/future weeks only. 
  // Pass the current week as a prop/state to this screen.
  // Output error message if week is invalid.

  useEffect(() => {
    if (leagueName !== "" && week !== "" && teamName !== "" && Number(week) <= NFL_WEEKS) {
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
        alignItems="center"
        paddingTop={60}
        paddingBottom={60}
        minHeight="100%"
      
      >
        <Text
          color={colors.text}
          fontSize={32}
          fontFamily={typography.fonts.poppins.bold}
          textAlign="center"
          paddingTop={30}
          marginBottom={59}
        >
          Create Match
        </Text>

        <FormControl
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          isRequired={false}
          width="90%"
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
                placeholder="Enter league name..." 
                maxLength={30}
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
            {/** TODO: make default value as the current week */}
            <Input
              marginHorizontal={30}
            >
              <InputField 
                type="text"   
                keyboardType="number-pad"
                color={colors.text}
                fontSize={18}
                fontFamily={typography.fonts.poppins.normal}
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
                maxLength={20}
                onChangeText={handleTeamName}
              />
            </Input>
          </View>

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
