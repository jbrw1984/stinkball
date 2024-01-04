import React, { useEffect } from 'react';
import { Button, ButtonText, ScrollView, FormControl, FormControlLabel, FormControlLabelText, Input, InputField, View, Text, Icon} from "@gluestack-ui/themed";
import { AppStackParamList } from 'app/navigators/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, typography} from "app/theme"
import { MatchScorePreview } from "app/components/MatchScorePreview";
import { MatchScorePreviewType, MatchScorePreviewData } from "app/components/MatchScorePreviewTempData/MatchScorePreviewData";

type MatchDetailsScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'Welcome'
>

export interface MatchDetailsScreenProps {
  navigation: MatchDetailsScreenNavigationProp;
}

/**
 * MatchDetailsScreen component allows users to view head-to-head matchups
 * with individual stats and points of their players for that match.
 * @component
 */
export function MatchDetailsScreen(props: MatchDetailsScreenProps) {

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

        <MatchScorePreview matchDetails={MatchScorePreviewData[0]}/> 


      </View>
    </ScrollView>
  );
};
