import { useEffect, useState } from "react";
import { View, Text, ViewStyle, TextStyle } from "react-native";
import { Button, Icon } from "@gluestack-ui/themed";
import {  LucideChevronLeft, LucideChevronRight} from 'lucide-react-native';
import { typography } from "app/theme";

interface PaginateWeekProps {
  weeks: number[];
  onWeekChange: (week: number) => void;
}

export const PaginateWeek: React.FC<PaginateWeekProps> = ({ weeks, onWeekChange }) => {
  // Note we will set default to current NFL week once linked up. For now just default to 1.
  const [week, setWeek] = useState<number>(1);
  // Initalize by checking if week is the first week.
  const [prevIsDisabled, setPrevIsDisabled] = useState<boolean>(week === weeks[0]);
  // Initialize by checking if week is the last week.
  const [nextIsDisabled, setNextIsDisabled] = useState<boolean>(week === weeks[weeks.length - 1]);

  // When user goes to previous week subtract 1 from current week.
  const handlePrev = () => {
    setWeek(week - 1);
  }

  // When user goes to next week add 1 to the current week.
  const handleNext = () => {
    setWeek(week + 1);
  }

  // Each time the week changes we check to see if we need to disable any of the buttons.
  useEffect(() => {
    setPrevIsDisabled(week === weeks[0]);
    setNextIsDisabled(week === weeks[weeks.length - 1]);

    // Invoke the callback to pass the current week to the parent component
    onWeekChange(week);
  }, [week, onWeekChange]);

  return (
    <View style={$mainContainer}>
      {/* Previous Week Button */}
      <Button onPress={handlePrev} variant="link" p="$0" size="xl" isDisabled={prevIsDisabled}>
        <Icon color="$white" size="xl" mr="$10" as={LucideChevronLeft} />
      </Button>

      <Text style={$weekStyle}>Week {week}</Text>

      {/* Next Week Button */}
      <Button onPress={handleNext} variant="link" p="$0" size="xl" isDisabled={nextIsDisabled}>
        <Icon color="$white" size="xl" ml="$10" as={LucideChevronRight}/>
      </Button>
    </View>
  )
}

// Styling
const $mainContainer: ViewStyle = {
  padding: 10,
  flexDirection: "row",
}

const $weekStyle: TextStyle = {
  alignSelf: "center",
  color: "white",
  fontFamily: typography.fonts.poppins.medium,
  fontSize: 24,
}