import { FantasyRoster } from "./fantasy-roster";

export interface FantasyTeam {
  id?: number;
  team_name: string;
  owner: number;
  logo: string;
  points: number;
  positions: FantasyRoster;
}
