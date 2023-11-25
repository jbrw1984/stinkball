import React from 'react';
import { Input, InputField, FormControl, VStack, Text, InputSlot, InputIcon, Button, ButtonText, ButtonIcon, AddIcon } from "@gluestack-ui/themed";
import { Droplet , ScanFace, List, PlusCircle, Swords} from 'lucide-react-native';
import { typography } from 'app/theme';
import { ScrollView, TextStyle, View, ViewStyle } from "react-native"
import { colors, spacing } from "../theme"
import { useNavigation } from '@react-navigation/native';


// interface DebugMenuProps {
//   onPress: () => void;

//   // Fix typing later.
//   navigation: any;
// }


export function DeveloperMenuScreen() {
  const navigation = useNavigation();

  return (

    <VStack space='xl' marginTop={120} padding={20}>  

      {/* <Button
        size="md"
        variant="solid"
        action="primary"
        marginHorizontal={20}
        onPress={() => navigation.navigate()}
      >
        <ButtonText 
          fontFamily={typography.fonts.poppins.medium}>Splash Screen </ButtonText>
        <ButtonIcon as={Droplet} />
      </Button> */}

      <Button
        size="md"
        variant="solid"
        action="primary"
        marginHorizontal={20}
        onPress={() => navigation.navigate('Welcome')}
      >
        <ButtonText fontFamily={typography.fonts.poppins.medium}>Login / Create Account Screen </ButtonText>
        <ButtonIcon as={ScanFace} />
      </Button>

      <Button
        size="md"
        variant="solid"
        action="primary"
        marginHorizontal={20}
        onPress={() => navigation.navigate('MatchList')}
      >
        <ButtonText fontFamily={typography.fonts.poppins.medium}>Match List Screen </ButtonText>
        <ButtonIcon as={List} />
      </Button>

      <Button
        size="md"
        variant="solid"
        action="primary"
        marginHorizontal={20}
      >
        <ButtonText fontFamily={typography.fonts.poppins.medium}>Create Match Screen </ButtonText>
        <ButtonIcon as={PlusCircle} />
      </Button>

      <Button
        size="md"
        variant="solid"
        action="primary"
        marginHorizontal={20}
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

  );
};
