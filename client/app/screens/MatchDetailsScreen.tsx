import React, { useEffect } from 'react';
import { Button, ButtonText, ScrollView, FormControl, FormControlLabel, FormControlLabelText, Input, InputField, View, Text, Icon} from "@gluestack-ui/themed";
import { AppStackParamList } from 'app/navigators/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, typography} from "app/theme"
import { MatchScorePreview } from "app/components/MatchScorePreview";
import { MatchScorePreviewType, MatchScorePreviewData } from "app/components/MatchScorePreviewTempData/MatchScorePreviewData";
import { LucideChevronLeft } from 'lucide-react-native';
import { RouteProp } from '@react-navigation/native';

type MatchDetailsScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'MatchDetails'
>

/**
 * Typing for the 'route' prop, which allows us to access any
 * parameters/state info that's passed into this screen 
 * through React Navigation navigate method
 */
type MatchDetailsScreenRouteProp = RouteProp<
  AppStackParamList, 
  'MatchDetails'
>;


export interface MatchDetailsScreenProps {
  navigation: MatchDetailsScreenNavigationProp;
  route: MatchDetailsScreenRouteProp
}

/**
 * MatchDetailsScreen component allows users to view head-to-head matchups
 * with individual stats and points of their players for that match.
 * @component
 */
export function MatchDetailsScreen(props: MatchDetailsScreenProps) {

  /**
   * NOTE: An error will be triggered if you enter the match details 
   * page through the developer menu. This is because the developer menu
   * doesn't pass in a specific match's information through its navigate 
   * hook. To make a quick fix for this, I put a default value of the first
   * sample match in the MatchScorePreviewData array. 
   */
  const { currentMatchState = MatchScorePreviewData[0] } = props.route.params ?? MatchScorePreviewData[0];

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
        <View
          flexDirection="row"
          alignItems="center"
          justifyContent='center'
          position='relative'  
          marginTop={30}
          marginBottom={13}  

        >
          <Button 
            onPress={() => props.navigation.navigate('MatchList')} 
            variant="link" 
            size="xl" 
            position='absolute'
            left={-50}
          >
            <Icon 
              color="$white" 
              size="xl" 
              as={LucideChevronLeft} 
            />
          </Button>

          <Text
            color={colors.text}
            fontSize={32}
            lineHeight={40}
            fontFamily={typography.fonts.poppins.bold}
            textAlign="center"
          >
            Match Name
          </Text>
        </View>


        <MatchScorePreview 
            matchDetails={currentMatchState} 
            isNavigtionActive={false}
        /> 


      </View>
    </ScrollView>
  );
};
