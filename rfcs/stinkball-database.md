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
    "id": "string",
    "player_name": "string",
    "nfl_team": "string",
    "position": "string",
    "weekly_points": "array of numbers",
}
```

- `id: string` - unique id for player
- `player_name: string` - name of player
- `nfl_team: string` - team player plays for
- `position: string` - position player plays
- `weekly_points: []` - array of points player has scored each week



**Fantasy Team Model**
```
{
    "id": "string",
    "team_name": "string",
    "owner": "string",
    "week": "number",
    "points": "number",

    "qb: "string",
    "rb1": "string",
    "rb2": "string",
    "wr1": "string",
    "wr2": "string",
    "te": "string",
    "flex": "string",
    "k": "string",
    "dst": "string",
}
```

- `id: string` - unique id for team
- `team_name: string` - name of team
- `owner: string` - id of user who owns team
- `week: number` - week of NFL season
- `points: number` - total points scored by team
- `qb: string` - id of quarterback
- `rb1: string` - id of running back 1
- `rb2: string` - id of running back 2
- `wr1: string` - id of wide receiver 1
- `wr2: string` - id of wide receiver 2
- `te: string` - id of tight end
- `flex: string` - id of flex player
- `k: string` - id of kicker
- `dst: string` - id of defense/special teams


**Match Model**
```
{
    "id": "string",
    "week": "number",
    "match_type": "string",
    "match_name": "string",

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

- `challenger: string` - id of user who challenged the match
- `participant: string` - id of user who accepted the match
- `challenger_team: fantasy team model` - fantasy team for challenger
- `participant_team: fantasy team model` - fantasy team for participant

- `winner: string` - id of user who won the match
- `loser: string` - id of user who lost the match




