import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { NFLTeamRoute } from './routes/nfl-teams.route';
import { NFLPlayerRoute } from './routes/nfl-players.route';

ValidateEnv();

const app = new App([new AuthRoute(), new UserRoute(), new NFLTeamRoute(), new NFLPlayerRoute()]);

app.listen();
