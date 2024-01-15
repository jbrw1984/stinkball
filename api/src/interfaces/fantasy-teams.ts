export interface FantasyTeam {
  id?: number;
  team_name: string;
  owner: number;
  logo: string;
  points: number;

  qb: number;
  rb1: number;
  rb2: number;
  wr1: number;
  wr2: number;
  te: number;
  pk: number;
  dst: number;
}
