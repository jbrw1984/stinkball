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

  public async findNFLTeamById(nflTeamId: number): Promise<NFLTeam> {
    const findNFLTeam: NFLTeam = await DB.NFLTeams.findByPk(nflTeamId);
    if (!findNFLTeam) throw new HttpException(409, "NFL Team doesn't exist");

    return findNFLTeam;
  }

}
