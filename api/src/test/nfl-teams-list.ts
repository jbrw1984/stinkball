import { NFLTeam } from "@/interfaces/nfl-teams.interface";

/**
 * 1,Arizona Cardinals,ARI,NFC,West
2,Atlanta Falcons,ATL,NFC,South
3,Baltimore Ravens,BAL,AFC,North
4,Buffalo Bills,BUF,AFC,East
5,Carolina Panthers,CAR,NFC,South
6,Chicago Bears,CHI,NFC,North
7,Cincinnati Bengals,CIN,AFC,North
8,Cleveland Browns,CLE,AFC,North
9,Dallas Cowboys,DAL,NFC,East
10,Denver Broncos,DEN,AFC,West
11,Detroit Lions,DET,NFC,North
12,Green Bay Packers,GB,NFC,North
13,Houston Texans,HOU,AFC,South
14,Indianapolis Colts,IND,AFC,South
15,Jacksonville Jaguars,JAX,AFC,South
16,Kansas City Chiefs,KC,AFC,West
17,Miami Dolphins,MIA,AFC,East
18,Minnesota Vikings,MIN,NFC,North
19,New England Patriots,NE,AFC,East
20,New Orleans Saints,NO,NFC,South
21,New York Giants,NYG,NFC,East
22,New York Jets,NYJ,AFC,East
23,Las Vegas Raiders,LV,AFC,West
24,Philadelphia Eagles,PHI,NFC,East
25,Pittsburgh Steelers,PIT,AFC,North
26,Los Angeles Chargers,LAC,AFC,West
27,San Francisco 49ers,SF,NFC,West
28,Seattle Seahawks,SEA,NFC,West
29,Los Angeles Rams,LAR,NFC,West
30,Tampa Bay Buccaneers,TB,NFC,South
31,Tennessee Titans,TEN,AFC,South
32,Washington Commanders,WAS,NFC,East
       */
export const mockNFLTeams : NFLTeam[] = [
  {
    id: 1, 
    team_name_short: 'Cardinals',  
    team_name_long: 'Arizona Cardinals',  
    team_city_short: 'ARI',  
    team_city_long: 'Arizona',  
    team_logo: 'image.png' 
  }, 
  {
    id: 2, 
    team_name_short: 'Falcons',  
    team_name_long: 'Atlanta Falcons',  
    team_city_short: 'ATL',  
    team_city_long: 'Atlanta',  
    team_logo: 'image.png' 
  }, 
  {
    id: 3, 
    team_name_short: 'Ravens',
    team_name_long: 'Baltimore Ravens',
    team_city_short: 'BAL',
    team_city_long: 'Baltimore',
    team_logo: 'image.png'
  }, 
  {
    id: 4,
    team_name_short: 'Bills',
    team_name_long: 'Buffalo Bills',
    team_city_short: 'BUF',
    team_city_long: 'Buffalo',
    team_logo: 'image.png'
  }, 
  {
    id: 5,
    team_name_short: 'Panthers',
    team_name_long: 'Carolina Panthers',
    team_city_short: 'CAR',
    team_city_long: 'Carolina',
    team_logo: 'image.png'
  }, 
  {
    id: 6,
    team_name_short: 'Bears',
    team_name_long: 'Chicago Bears',
    team_city_short: 'CHI',
    team_city_long: 'Chicago',
    team_logo: 'image.png'
  }, 
  {
    id: 7,
    team_name_short: 'Bengals',
    team_name_long: 'Cincinnati Bengals',
    team_city_short: 'CIN',
    team_city_long: 'Cincinnati',
    team_logo: 'image.png'
  }, 
  {
    id: 8,
    team_name_short: 'Browns',
    team_name_long: 'Cleveland Browns',
    team_city_short: 'CLE',
    team_city_long: 'Cleveland',
    team_logo: 'image.png'
  }, 
  {
    id: 9,
    team_name_short: 'Cowboys',
    team_name_long: 'Dallas Cowboys',
    team_city_short: 'DAL',
    team_city_long: 'Dallas',
    team_logo: 'image.png'
  }, 
  {
    id: 10,
    team_name_short: 'Broncos',
    team_name_long: 'Denver Broncos',
    team_city_short: 'DEN',
    team_city_long: 'Denver',
    team_logo: 'image.png'
  }, 
  {
    id: 11,
    team_name_short: 'Lions',
    team_name_long: 'Detroit Lions',
    team_city_short: 'DET',
    team_city_long: 'Detroit',
    team_logo: 'image.png'
  }, 
  {
    id: 12,
    team_name_short: 'Packers',
    team_name_long: 'Green Bay Packers',
    team_city_short: 'GB',
    team_city_long: 'Green Bay',
    team_logo: 'image.png'
  }, 
  {
    id: 13,
    team_name_short: 'Texans',
    team_name_long: 'Houston Texans',
    team_city_short: 'HOU',
    team_city_long: 'Houston',
    team_logo: 'image.png'
  }, 
  {
    id: 14,
    team_name_short: 'Colts',
    team_name_long: 'Indianapolis Colts',
    team_city_short: 'IND',
    team_city_long: 'Indianapolis',
    team_logo: 'image.png'
  }, 
  {
    id: 15,
    team_name_short: 'Jaguars',
    team_name_long: 'Jacksonville Jaguars',
    team_city_short: 'JAX',
    team_city_long: 'Jacksonville',
    team_logo: 'image.png'
  }, 
  {
    id: 16,
    team_name_short: 'Chiefs',
    team_name_long: 'Kansas City Chiefs',
    team_city_short: 'KC',
    team_city_long: 'Kansas City',
    team_logo: 'image.png'
  }, 
  {
    id: 17,
    team_name_short: 'Dolphins',
    team_name_long: 'Miami Dolphins',
    team_city_short: 'MIA',
    team_city_long: 'Miami',
    team_logo: 'image.png'
  }, 
  {
    id: 18,
    team_name_short: 'Vikings',
    team_name_long: 'Minnesota Vikings',
    team_city_short: 'MIN',
    team_city_long: 'Minnesota',
    team_logo: 'image.png'
  }, 
  {
    id: 19,
    team_name_short: 'Patriots',
    team_name_long: 'New England Patriots',
    team_city_short: 'NE',
    team_city_long: 'New England',
    team_logo: 'image.png'
  }, 
  {
    id: 20,
    team_name_short: 'Saints',
    team_name_long: 'New Orleans Saints',
    team_city_short: 'NO',
    team_city_long: 'New Orleans',
    team_logo: 'image.png'
  }, 
  {
    id: 21,
    team_name_short: 'Giants',
    team_name_long: 'New York Giants',
    team_city_short: 'NYG',
    team_city_long: 'New York',
    team_logo: 'image.png'
  }, 
  {
    id: 22,
    team_name_short: 'Jets',
    team_name_long: 'New York Jets',
    team_city_short: 'NYJ',
    team_city_long: 'New York',
    team_logo: 'image.png'
  }, 
  {
    id: 23,
    team_name_short: 'Raiders',
    team_name_long: 'Las Vegas Raiders',
    team_city_short: 'LV',
    team_city_long: 'Las Vegas',
    team_logo: 'image.png'
  }, 
  {
    id: 24,
    team_name_short: 'Eagles',
    team_name_long: 'Philadelphia Eagles',
    team_city_short: 'PHI',
    team_city_long: 'Philadelphia',
    team_logo: 'image.png'
  }, 
  {
    id: 25,
    team_name_short: 'Steelers',
    team_name_long: 'Pittsburgh Steelers',
    team_city_short: 'PIT',
    team_city_long: 'Pittsburgh',
    team_logo: 'image.png'
  }, 
  {
    id: 26,
    team_name_short: 'Chargers',
    team_name_long: 'Los Angeles Chargers',
    team_city_short: 'LAC',
    team_city_long: 'Los Angeles',
    team_logo: 'image.png'
  }, 
  {
    id: 27,
    team_name_short: '49ers',
    team_name_long: 'San Francisco 49ers',
    team_city_short: 'SF',
    team_city_long: 'San Francisco',
    team_logo: 'image.png'
  }, 
  {
    id: 28,
    team_name_short: 'Seahawks',
    team_name_long: 'Seattle Seahawks',
    team_city_short: 'SEA',
    team_city_long: 'Seattle',
    team_logo: 'image.png'
  }, 
  {
    id: 29,
    team_name_short: 'Rams',
    team_name_long: 'Los Angeles Rams',
    team_city_short: 'LAR',
    team_city_long: 'Los Angeles',
    team_logo: 'image.png'
  }, 
  {
    id: 30,
    team_name_short: 'Buccaneers',
    team_name_long: 'Tampa Bay Buccaneers',
    team_city_short: 'TB',
    team_city_long: 'Tampa Bay',
    team_logo: 'image.png'
  }, 
  {
    id: 31,
    team_name_short: 'Titans',
    team_name_long: 'Tennessee Titans',
    team_city_short: 'TEN',
    team_city_long: 'Tennessee',
    team_logo: 'image.png'
  }, 
  {
    id: 32,
    team_name_short: 'Commanders',
    team_name_long: 'Washington Commanders',
    team_city_short: 'WAS',
    team_city_long: 'Washington',
    team_logo: 'image.png'
  }
]; 
