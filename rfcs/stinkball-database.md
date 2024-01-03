## Stinkball Database

### Summary
Database will store user information, NFL players, fantasy teams, and Stinkball games. 

**User Model**
```
{
    "id": "string",
    "username": "string",
    "password": "string",
    "email": "string",
}
```

- `id: string` - unique id for user
- `username: string` - username for user
- `password: string` - password for user
- `email: string` - email for user


**NFL Player Model**
```
{
    "id": "number",
    "player_name": "string",
    "teamId": "number",
    "position": "string",
    "player_portrait": "string",
}
```

- `id: number` - unique id for player
- `player_name: string` - name of player
- `teamId: number` - foreign key to nfl team id (one of 32 unique team IDs)
- `position: string` - position of player
- `player_portrait: string` - portrait of player

**Weekly Points Model**
```
{
    "id": "string",
    "player_id": "string",
    "week": "number",
    "points": "number",
}
```

- `id: string` - unique id for weekly points scored
- `player_id: string` - foreign key to player id
- `week: number` - week of nfl season
- `points: number` - number of points scored by player for specified week


**NFL Team Model**
```
{
    "id": "string",
    "team_name_short": "string", 
    "team_name_long": "string",
    "team_city_long": "string",
    "team_city_short": "string",
    "team_logo": "string",
}
```
- `id: string` - one of 32 unique nfl team IDs
- `team_name_short: string` - abbreviated nfl team name
- `team_name_long: string` - full nfl team name
- `team_city_short: string` - abbreviated nfl team city 
- `team_city_long: string` - full nfl team city 
- `team_logo: string` - url path to stored nfl team logo image


**Fantasy Team Model**
```
{
    "id": "number",
    "team_name": "string",
    "owner": "number",
    "logo": "string"
    "week": "number",
    "points": "number",

    "qb": "number",
    "rb1": "number",
    "rb2": "number",
    "wr1": "number",
    "wr2": "number",
    "te": "number",
    "k": "number",
    "dst": "number",
}
```

- `id: string` - unique id for fantasy team
- `team_name: string` - fantasy team name
- `owner: string` - foreign key to id of user who owns team
- `logo: string` - url path to stored logo image
- `week: number` - week of NFL season
- `points: number` - total points scored by team for the week
- `positions: enum` - string of value qb, rb1, rb2, wr1, wr2, te, flex, k, or dst


**Match Model**
```
{
    "id": "string",
    "week": "number",
    "match_type": "string",
    "match_name": "string",
    "match_status": {
        "type": "enum",
        "values": ["completed", "upcoming", "live"]
    },
    
    "challenger": "string",
    "participant": "string",
    "challenger_team": "fantasy team model",
    "participant_team": "fantasy team model",
    

    "winner": "string",
    "loser": "string",
}
```

- `id: string` - unique id for match
- `week: number` - week of NFL season match was played
- `match_type: string` - type of game played (public vs. private)
- `match_name: string` - name of match
- `match_status: enum` - status as a string valued as completed, upcoming, or live

- `challenger: string` - id of user who challenged the match
- `participant: string` - id of user who accepted the match
- `challenger_team: fantasy team model` - foreign key to fantasy team of challenger
- `participant_team: fantasy team model` - foreign key to fantasy team of participant


- `winner: string` - id of user who won the match
- `loser: string` - id of user who lost the match
