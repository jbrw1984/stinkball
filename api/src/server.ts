import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { NFLTeamRoute } from './routes/nfl-teams.route';
import { NFLPlayerRoute } from './routes/nfl-players.route';
import { FantasyTeamRoute } from './routes/fantasy-teams.route';

ValidateEnv();

const app = new App([
  new AuthRoute(), 
  new UserRoute(), 
  new NFLTeamRoute(), 
  new NFLPlayerRoute(), 
  new FantasyTeamRoute()
]);

app.listen();
