# Enpoints Needed For Each Page

### Sign In Page
  - POST /user/login

  #### Sign Up Page  

  - POST /user/signup

  #### Forgot Password Page

  - GET /user/email
  - POST /user/email/forgotpassword

### Match List Page
 - GET /matches/{id=userId}
    * (Score, usernames, logos, team names)
 - GET /nflweek
 
### Match Details Page
  - GET /matches/{id=matchId}
    * (Score, usernames, logos, team names)
  - GET /fantasyteam/{id=fantasyteamId}
    * (List of players selected)

### Create Match Page

  - POST /matches/
  - POST /invitation/{id=matchId}
  - GET /nflweek

### Player List Page

  - GET /fantasyteam/{id=fantasyTeamId}
  - GET /players/
    * (Exclude players already on fantasy team)
  - GET /players/{search=""}
  - GET /players/{position=""}
  - POST /fantasyteam/{playerId=playerId&fantasyteamId=fantasyteamId}
    * (Add new player to team)
  - DELETE /fantasyteam/{playerId=playerId&fantasyteamId=fantasyteamId}
    * (Delete player from team)
  