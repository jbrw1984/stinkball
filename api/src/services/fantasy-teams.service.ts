import { Service } from 'typedi';
import { DB } from '@database';
import { HttpException } from '@/exceptions/httpException';
import { FantasyTeam } from '@/interfaces/fantasy-teams';
import { CreateFantasyTeamDto, UpdateFantasyTeamDto } from '@/dtos/fantasy-teams.dto';
import { NFLPlayer } from '@/interfaces/nfl-players.interface';

@Service()
export class FantasyTeamService {
  public async createFantasyTeam(fantasyTeam: CreateFantasyTeamDto): Promise<FantasyTeam> {
    // Note we do not need to check if team already exist because teams do not need to be unique.

    const newTeam: FantasyTeam = await DB.FantasyTeams.create(fantasyTeam);
    return newTeam;
  }

  public async findFantasyTeamById(fantasyTeamId: number): Promise<FantasyTeam> {
    const findFantasyTeam: FantasyTeam = await DB.FantasyTeams.findByPk(fantasyTeamId);
    if (!findFantasyTeam) throw new HttpException(409, "Fantasy Team doesn't exist");

    return findFantasyTeam;
  }

  public async updateFantasyTeam(fantasyTeamId: number, newFantasyTeamData: UpdateFantasyTeamDto): Promise<FantasyTeam> {
    const findFantasyTeam: FantasyTeam = await DB.FantasyTeams.findByPk(fantasyTeamId);
    if (!findFantasyTeam) throw new HttpException(409, "Fantasy Team doesn't exist");

    // Iterate over the new fantasy team data updating the team as needed.
    for (const [key, value] of Object.entries(newFantasyTeamData)) {
      await this.updateIndividualRosterSpot(value, key.toString(), findFantasyTeam.id);
    }
    
    const updatedFantasyTeam: FantasyTeam = await DB.FantasyTeams.findByPk(fantasyTeamId);
    return updatedFantasyTeam;
  }

  public async updateIndividualRosterSpot(playerId: number, playerPosition: string, teamId: number): Promise<NFLPlayer> {
    if (!playerId) return null;

    const findNFLPlayer: NFLPlayer = await DB.NFLPlayers.findByPk(playerId);
    if (!findNFLPlayer) throw new HttpException(409, "NFL Player doesn't exist");

    if (!playerPosition.startsWith(findNFLPlayer.position.toLowerCase())) throw new HttpException(409, "Invalid position");
    
    // Update player on fantasy team.
    await DB.FantasyTeams.update({ [playerPosition]: playerId }, { where: { id: teamId } });

    return findNFLPlayer;
  }
}