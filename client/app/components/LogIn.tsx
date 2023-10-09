import { View, Text, ViewStyle } from "react-native";
import { Input, InputField } from "@gluestack-ui/themed";


export const LogIn = () => {
  return (
    <View style={$mainContainer}> 
      <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
        <InputField
          placeholder='Username'
        />
      </Input>
      <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
        <InputField
          placeholder='Password'
        />
      </Input>
    </View>
  )
}


// Styling
const $mainContainer: ViewStyle = {
  flex: 1,
}