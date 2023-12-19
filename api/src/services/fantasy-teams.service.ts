import { Service } from 'typedi';
import { DB } from '@database';
import { HttpException } from '@/exceptions/httpException';
import { FantasyTeam } from '@/interfaces/fantasy-teams';
import { CreateFantasyTeamDto } from '@/dtos/fantasy-teams.dto';

@Service()
export class FantasyTeamService {
  public async createFantasyTeam(fantasyTeam: CreateFantasyTeamDto): Promise<FantasyTeam> {
    // Note we do not need to check if team already exist because teams do not need to be unique.

    const newTeam: FantasyTeam = await DB.FantasyTeams.create(fantasyTeam);
    return newTeam;
  }
}