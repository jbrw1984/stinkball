import React from 'react';
import { VStack, Button, ButtonText, ButtonIcon, AddIcon, ScrollView } from "@gluestack-ui/themed";
import { ScanFace, List, PlusCircle, Swords} from 'lucide-react-native';
import { typography } from 'app/theme';
import { AppStackParamList } from 'app/navigators/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from "app/theme"

type DeveloperMenuScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'Welcome'
>

export interface DeveloperMenuScreenProps {
  navigation: DeveloperMenuScreenNavigationProp;
}

/**
 * DeveloperMenuScreen component displays a menu for navigating to app screens.
 * @component
 */
export function DeveloperMenuScreen(props: DeveloperMenuScreenProps) {

  return (
    <ScrollView
      backgroundColor={colors.background}
      flex={1}
    >
      <VStack 
        space='xl' 
        marginTop={120} 
        padding={20}
        > 

        <Button
          size="md"
          variant="solid"
          action="primary"
          marginHorizontal={20}
          onPress={() => props.navigation.navigate('Welcome')}
        >
          <ButtonText fontFamily={typography.fonts.poppins.medium}>Login / Create Account Screen </ButtonText>
          <ButtonIcon as={ScanFace} />
        </Button>

        <Button
          size="md"
          variant="solid"
          action="primary"
          marginHorizontal={20}
          onPress={() => props.navigation.navigate('MatchList')}
        >
          <ButtonText fontFamily={typography.fonts.poppins.medium}>Match List Screen </ButtonText>
          <ButtonIcon as={List} />
        </Button>

        <Button
          size="md"
          variant="solid"
          action="primary"
          marginHorizontal={20}
          onPress={() => props.navigation.navigate('CreateMatch')}
        >
          <ButtonText fontFamily={typography.fonts.poppins.medium}>Create Match Screen </ButtonText>
          <ButtonIcon as={PlusCircle} />
        </Button>

        <Button
          size="md"
          variant="solid"
          action="primary"
          marginHorizontal={20}
          onPress={() => props.navigation.navigate('MatchDetails')}
        >
          <ButtonText fontFamily={typography.fonts.poppins.medium}>Match Details Screen </ButtonText>
          <ButtonIcon as={Swords} />
        </Button>

        <Button
          size="md"
          variant="solid"
          action="primary"
          marginHorizontal={20}
        >
          <ButtonText fontFamily={typography.fonts.poppins.medium}>Add Players Screen </ButtonText>
          <ButtonIcon as={AddIcon} />
        </Button>

      </VStack>
    </ScrollView>

  );
};
