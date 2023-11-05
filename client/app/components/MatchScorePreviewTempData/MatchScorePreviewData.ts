export type MatchScorePreviewType = {
  week: number;
  team1Name: string;
  team2Name: string;
  team1Username: string;
  team2Username: string;
  team1Score: number;
  team2Score: number;
  team1ImageSource: any;
  team2ImageSource: any;
};

const teamImage1 = require("../../../assets/images/team-image-1.png");
const teamImage2 = require("../../../assets/images/team-image-2.png")

export const MatchScorePreviewData: MatchScorePreviewType[] = [
  {
    week: 1,
    team1Name: "Team A",
    team2Name: "Team B",
    team1Username: "userA",
    team2Username: "userB",
    team1Score: 124.72,
    team2Score: 114.52,
    team1ImageSource: teamImage1,
    team2ImageSource: teamImage2,
  },
  {
    week: 2,
    team1Name: "Team C",
    team2Name: "Team D",
    team1Username: "userA",
    team2Username: "userB",
    team1Score: 114.72,
    team2Score: 174.52,
    team1ImageSource: teamImage2,
    team2ImageSource: teamImage2,
  },
  {
    week: 5,
    team1Name: "Team A",
    team2Name: "Team B",
    team1Username: "userA",
    team2Username: "userB",
    team1Score: 124.72,
    team2Score: 114.52,
    team1ImageSource: teamImage1,
    team2ImageSource: teamImage2,
  },
  {
    week: 9,
    team1Name: "Team A",
    team2Name: "Team B",
    team1Username: "userA",
    team2Username: "userB",
    team1Score: 124.72,
    team2Score: 114.52,
    team1ImageSource: teamImage1,
    team2ImageSource: teamImage2,
  },
  {
    week: 1,
    team1Name: "Team Y",
    team2Name: "Team Z",
    team1Username: "userA",
    team2Username: "userB",
    team1Score: 131.43,
    team2Score: 99.72,
    team1ImageSource: teamImage1,
    team2ImageSource: teamImage2,
  },
  {
    week: 1,
    team1Name: "Team A",
    team2Name: "Team B",
    team1Username: "userA",
    team2Username: "userB",
    team1Score: 124.72,
    team2Score: 114.52,
    team1ImageSource: teamImage1,
    team2ImageSource: teamImage2,
  },
  {
    week: 1,
    team1Name: "Team A",
    team2Name: "Team B",
    team1Username: "userA",
    team2Username: "userB",
    team1Score: 124.72,
    team2Score: 114.52,
    team1ImageSource: teamImage1,
    team2ImageSource: teamImage2,
  },
  {
    week: 1,
    team1Name: "Team A",
    team2Name: "Team B",
    team1Username: "userA",
    team2Username: "userB",
    team1Score: 124.72,
    team2Score: 114.52,
    team1ImageSource: teamImage1,
    team2ImageSource: teamImage2,
  },
  {
    week: 1,
    team1Name: "Team A",
    team2Name: "Team B",
    team1Username: "userA",
    team2Username: "userB",
    team1Score: 124.72,
    team2Score: 114.52,
    team1ImageSource: teamImage1,
    team2ImageSource: teamImage2,
  },

]