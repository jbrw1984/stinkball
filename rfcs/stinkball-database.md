## Stinkball Database

### Summary
Database will store user information, NFL players, and Stinkball games. 

### User information
**User Model**
```
{
    "id": "string",
    "username": "string",
    "password": "string",
    "email": "string",
    "matches": "array of game ids",
}
```

- `id: string` - unique id for user
- `username: string` - username for user
- `password: string` - password for user
- `email: string` - email for user
- `matches: []` - array of match ids for matches user is in


### NFL players
**Player Model**
```
{
    "id": "string",
    "name": "string",
    "team": "string",
    "position": "string",
    "weekly_points": "array of numbers",
    
}
```

- `id: string` - unique id for player
- `name: string` - name of player
- `team: string` - team player plays for
- `position: string` - position player plays
- `weekly_points: []` - array of points player has scored each week


### Stinkball matches
**Game Model**
```
{
    "id": "string",
    "week": "number",
    "game_type": "string",
    "match_name": "string",

    "challenger": "string",
    "participant": "string",
    "challenger_players": "array of player ids",
    "participant_players": "array of player ids",

    "challenger_score": "number",
    "participant_score": "number",
    "winner": "string",
    "loser": "string",
}
```

- `id: string` - unique id for match
- `week: number` - week of NFL season match was played
- `game_type: string` - type of game played (public vs. private)
- `challenger: string` - id of user who challenged the match
- `participant: string` - id of user who accepted the match
- `challenger_players: []` - array of player ids for players chosen by challenger
- `participant_players: []` - array of player ids for players chosen by participant
- `challenger_score: number` - total points scored by challenger's players
- `participant_score: number` - total points scored by participant's players
- `winner: string` - id of user who won the match
- `loser: string` - id of user who lost the match




