import { PaginateWeek } from "app/components/PaginateWeek";
import React from "react";
import { View, Text } from "react-native";

const weeks: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];


export const MatchListScreen = () => {
  return (
    <View style={{backgroundColor: "#1D1D1D", height: "100%", flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      
      <PaginateWeek weeks={weeks}/>
    </View>
  );
}