export type NFLPlayerModel = {
  id: number, 
  player_name: string, 
  teamId: number, 
  position: string, 
  player_portrait: string, 
}

export type PlayerInfo = {
  id: number;
  player_name: string;
  player_name_short: string;
  teamId: number;
  position: string;
  player_portrait: string;
  player_team_name_short: string;
  player_team_name_long: string;
  player_team_city_short: string;
  player_team_city_long: string;
  player_points: number;
}

export type FantasyTeam = {
  qb: PlayerInfo;
  rb1: PlayerInfo;
  rb2: PlayerInfo;
  wr1: PlayerInfo;
  wr2: PlayerInfo;
  te: PlayerInfo;
  dst: PlayerInfo;
  k: PlayerInfo;
};

export type FantasyTeamKey = keyof FantasyTeam;

// Create an object of a team of players with 1 qb, 2 rb's, 2 wr's, 1 te, 1 dst, and 1 k
export const USER1_TEAM : FantasyTeam = {
  qb: {
    id: 1, 
    player_name: "Josh Allen", 
    player_name_short: "J. Allen",
    teamId: 4, 
    position: 'qb', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png', 
    player_team_name_short: 'Bills',
    player_team_name_long: 'Buffalo Bills',
    player_team_city_short: 'BUF',
    player_team_city_long: 'Buffalo',
    player_points: 25.2
  }, 
  rb1: {
    id: 1, 
    player_name: "Christian McCaffrey", 
    player_name_short: "C. McCaffrey",
    teamId: 27, 
    position: 'rb', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/3117251.png', 
    player_team_name_short: 'Panthers',
    player_team_name_long: 'Carolina Panthers',
    player_team_city_short: 'CAR',
    player_team_city_long: 'Carolina',
    player_points: 22.3
  },
  rb2: {
    id: 1, 
    player_name: "Kyren Williams", 
    player_name_short: "K. Williams",
    teamId: 29, 
    position: 'rb', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/4430737.png', 
    player_team_name_short: 'Rams',
    player_team_name_long: 'Los Angeles Rams',
    player_team_city_short: 'LAR',
    player_team_city_long: 'Los Angeles',
    player_points: 18.7
  },
  wr1: {
    id: 1, 
    player_name: "Tyreek Hill", 
    player_name_short: "T. Hill",
    teamId: 17, 
    position: 'wr', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png', 
    player_team_name_short: 'Dolphins',
    player_team_name_long: 'Miami Dolphins',
    player_team_city_short: 'MIA',
    player_team_city_long: 'Miami',
    player_points: 17.3
  },
  wr2: {
    id: 1, 
    player_name: "CeeDee Lamb", 
    player_name_short: "C. Lamb",
    teamId: 9, 
    position: 'wr', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/4241389.png', 
    player_team_name_short: 'Cowboys',
    player_team_name_long: 'Dallas Cowboys',
    player_team_city_short: 'DAL',
    player_team_city_long: 'Dallas',
    player_points: 15.6
  },
  te: {
    id: 1, 
    player_name: "Travis Kelce", 
    player_name_short: "T. Kelce",
    teamId: 16, 
    position: 'te', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/15847.png', 
    player_team_name_short: 'Chiefs',
    player_team_name_long: 'Kansas City Chiefs',
    player_team_city_short: 'KC',
    player_team_city_long: 'Kansas City',
    player_points: 14.1
  },
  dst: {
    id: 1,
    player_name: "NY Giants",
    player_name_short: "Giants",
    teamId: 21,
    position: 'dst',
    player_portrait: "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    player_team_name_short: 'Giants',
    player_team_name_long: 'New York Giants',
    player_team_city_short: 'NYG',
    player_team_city_long: 'New York',
    player_points: 12.9
  },
  k: {
    id: 1,
    player_name: "Justin Tucker",
    player_name_short: "J. Tucker",
    teamId: 3,
    position: 'k',
    player_portrait: "https://a.espncdn.com/i/headshots/nfl/players/full/15683.png", 
    player_team_name_short: 'Ravens',
    player_team_name_long: 'Baltimore Ravens',
    player_team_city_short: 'BAL',
    player_team_city_long: 'Baltimore',
    player_points: 11.8
  }
}

export const USER2_TEAM : FantasyTeam = {
  qb: { 
    id: 1, 
    player_name: "Patrick Mahomes", 
    player_name_short: "P. Mahomes", 
    teamId: 4, 
    position: 'qb', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png', 
    player_team_name_short: 'Chiefs',
    player_team_name_long: 'Kansas City Chiefs',
    player_team_city_short: 'KC',
    player_team_city_long: 'Kansas City',
    player_points: 25.2
  },
  rb1: {
    id: 1, 
    player_name: "David Montgomery", 
    player_name_short: "D. Montgomery",
    teamId: 11, 
    position: 'rb', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/4035538.png', 
    player_team_name_short: 'Bears',
    player_team_name_long: 'Chicago Bears',
    player_team_city_short: 'CHI',
    player_team_city_long: 'Chicago',
    player_points: 22.3
  },
  rb2: {
    id: 1, 
    player_name: "James Cook", 
    player_name_short: "J. Cook",
    teamId: 4, 
    position: 'rb', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/4430737.png', 
    player_team_name_short: 'Bills',
    player_team_name_long: 'Buffalo Bills',
    player_team_city_short: 'BUF',
    player_team_city_long: 'Buffalo',
    player_points: 18.7
  },
  wr1: {
    id: 1, 
    player_name: "DK Metcalf", 
    player_name_short: "D. Metcalf",
    teamId: 28, 
    position: 'wr', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/4047650.png', 
    player_team_name_short: 'Seahawks',
    player_team_name_long: 'Seattle Seahawks',
    player_team_city_short: 'SEA',
    player_team_city_long: 'Seattle',
    player_points: 17.3
  },
  wr2: {
    id: 1, 
    player_name: "DeVonta Smith", 
    player_name_short: "D. Smith",
    teamId: 14, 
    position: 'wr', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/4241478.png', 
    player_team_name_short: 'Eagles',
    player_team_name_long: 'Philadelphia Eagles',
    player_team_city_short: 'PHI',
    player_team_city_long: 'Philadelphia',
    player_points: 15.6
  },
  te: {
    id: 1, 
    player_name: "Sam LaPorta", 
    player_name_short: "S. LaPorta",
    teamId: 11, 
    position: 'te', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/4430027.png', 
    player_team_name_short: 'Bears',
    player_team_name_long: 'Chicago Bears',
    player_team_city_short: 'CHI',
    player_team_city_long: 'Chicago',
    player_points: 14.1
  },
  dst: {
    id: 1,
    player_name: "GB Packers",
    player_name_short: "Packers",
    teamId: 12,
    position: 'dst',
    player_portrait: "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    player_team_name_short: 'Packers',
    player_team_name_long: 'Green Bay Packers',
    player_team_city_short: 'GB',
    player_team_city_long: 'Green Bay',
    player_points: 12.9
  },
  k: {
    id: 1,
    player_name: "Brandon Aubrey",
    player_name_short: "B. Aubrey",
    teamId: 9,
    position: 'k',
    player_portrait: "https://a.espncdn.com/i/headshots/nfl/players/full/3953687.png",
    player_team_name_short: 'Cowboys',
    player_team_name_long: 'Dallas Cowboys',
    player_team_city_short: 'DAL',
    player_team_city_long: 'Dallas',
    player_points: 11.8
  }
}

export const PLAYER_LIST : NFLPlayerModel[] = [
  {
    id: 1, 
    player_name: "Josh Allen", 
    teamId: 4, 
    position: 'qb', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png', 
  },
  {
    id: 1, 
    player_name: "Patrick Mahomes", 
    teamId: 4, 
    position: 'qb', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png', 
  },
  {
    id: 1, 
    player_name: "Christian McCaffrey", 
    teamId: 27, 
    position: 'rb', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/3117251.png', 
  }, 
  {
    id: 1, 
    player_name: "Kyren Williams", 
    teamId: 29, 
    position: 'rb', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/4430737.png', 
  },
  {
    id: 1, 
    player_name: "James Cook", 
    teamId: 4, 
    position: 'rb', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/4430737.png', 
  },
  {
    id: 1, 
    player_name: "David Montgomery", 
    teamId: 11, 
    position: 'rb', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/4035538.png', 
  },
  {
    id: 1, 
    player_name: "David Montgomery", 
    teamId: 11, 
    position: 'rb', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/4035538.png', 
  },
  {
    id: 1, 
    player_name: "Tyreek Hill", 
    teamId: 17, 
    position: 'wr', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png', 
  },
  {
    id: 1, 
    player_name: "CeeDee Lamb", 
    teamId: 9, 
    position: 'wr', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/4241389.png', 
  },
  {
    id: 1, 
    player_name: "DK Metcalf", 
    teamId: 28, 
    position: 'wr', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/4047650.png', 
  },
  {
    id: 1, 
    player_name: "DeVonta Smith", 
    teamId: 14, 
    position: 'wr', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/4241478.png', 
  },
  {
    id: 1, 
    player_name: "Travis Kelce", 
    teamId: 16, 
    position: 'te', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/15847.png', 
  },
  {
    id: 1, 
    player_name: "Sam LaPorta", 
    teamId: 11, 
    position: 'te', 
    player_portrait: 'https://a.espncdn.com/i/headshots/nfl/players/full/4430027.png', 
  },
  {
    id: 1,
    player_name: "NY Giants",
    teamId: 21,
    position: 'dst',
    player_portrait: "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png"
  }, 
  {
    id: 1,
    player_name: "GB Packers",
    teamId: 12,
    position: 'dst',
    player_portrait: "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png"
  }, 
  {
    id: 1,
    player_name: "Justin Tucker",
    teamId: 3,
    position: 'k',
    player_portrait: "https://a.espncdn.com/i/headshots/nfl/players/full/15683.png"
  }, 
  {
    id: 1,
    player_name: "Brandon Aubrey",
    teamId: 9,
    position: 'k',
    player_portrait: "https://a.espncdn.com/i/headshots/nfl/players/full/3953687.png"
  }
]
