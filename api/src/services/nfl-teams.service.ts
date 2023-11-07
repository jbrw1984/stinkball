import { hash } from 'bcrypt';
import { Service } from 'typedi';
import { DB } from '@database';
import { CreateNFLTeamDto } from '@dtos/nfl-teams.dto';
import { HttpException } from '@/exceptions/httpException';
import { NFLTeam } from '@interfaces/nfl-teams.interface';

@Service()
export class NFLTeamService {
  public async findAllNFLTeam(): Promise<NFLTeam[]> {
    const allNFLTeam: NFLTeam[] = await DB.NFLTeams.findAll();
    return allNFLTeam;
  }
}
