import request from 'supertest';
import { App } from '@/app';
import { DB } from '@database';
import { NFLPlayerRoute } from '@/routes/nfl-players.route';
import { NFLPlayer } from '@/interfaces/nfl-players.interface';
import { player1, player2, player3, player4, player5 } from './fantasy-players-list';

// Global Variables
const nflPlayersRoute = new NFLPlayerRoute();
const app = new App([nflPlayersRoute]);

beforeAll(async () => {
  // Remove all players from NFLPlayers table in DB.
  await DB.NFLPlayers.truncate();

  // Manually Add them to the DB
  await DB.NFLPlayers.create(player1);
  await DB.NFLPlayers.create(player2);
  await DB.NFLPlayers.create(player3);
  await DB.NFLPlayers.create(player4);
  await DB.NFLPlayers.create(player5);
}); 

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe("Testing NFL Players", () => {

  describe('[POST] /nfl-players', () => {
    it('response addAll nfl-players', async () => {

      const result = await request(app.getServer()).post(`${nflPlayersRoute.path}`);

      expect(result.status).toEqual(200);
      expect(result.body.data.length).toBeGreaterThanOrEqual(2000);
    
    // Set timeout to 20 seconds to give test time to add every player.
    }, 20000); 
  });

  describe('[GET] /nfl-players', () => {
    it('response findAll nfl-players', async () => {
      // Call our GET NFL players endpoint
      const result = await request(app.getServer()).get(`${nflPlayersRoute.path}`); 
      
      // Check for good status and all five players in response
      expect(result.status).toEqual(200);
      // Randomly check 1 value from each player in the response
      expect(result.body.data[0].position).toEqual(player1.position);
      expect(result.body.data[1].player_portrait).toEqual(player2.player_portrait);
      expect(result.body.data[2].player_name).toEqual(player3.player_name);
      expect(result.body.data[3].teamId).toEqual(player4.teamId);
      expect(result.body.data[4].player_portrait).toEqual(player5.player_portrait);
    });
  });

  
  describe('[GET] /nfl-players:id', () => {
    it('response findOne nfl-player', async () => {
      const mockNFLPlayer: NFLPlayer = {
        id: 3,
        player_name: "Player 3",
        teamId: 3,
        position: "WR",
        player_portrait: "Image 3",
      };

      const result = await request(app.getServer()).get(`${nflPlayersRoute.path}/${mockNFLPlayer.id}`); 
      
      // Check for good response code.
      expect(result.status).toEqual(200);
      // Check each value to make sure it matches Mock NFL player
      expect(result.body.data.id).toEqual(mockNFLPlayer.id);
      expect(result.body.data.player_name).toEqual(mockNFLPlayer.player_name);
      expect(result.body.data.teamId).toEqual(mockNFLPlayer.teamId);
      expect(result.body.data.position).toEqual(mockNFLPlayer.position);
      expect(result.body.data.player_portrait).toEqual(mockNFLPlayer.player_portrait);
    });

    it('response findOne nfl-player - exception', async () => {
      const mockNFLPlayer: NFLPlayer = {
        id: 6000,
        player_name: "Player 6",
        teamId: 6,
        position: "Defense",
        player_portrait: "Image 6",
      };
      
      const result = await request(app.getServer()).get(`${nflPlayersRoute.path}/${mockNFLPlayer.id}`); 
      
      expect(result.status).toEqual(409);
      expect(result.body.message).toEqual("NFL Player doesn't exist");
    });
  });

  describe('[GET] /nfl-players/filter', () => {
    it('response filteredPlayers success', async () => {
      const filters: string[] = ["QB", "WR", "TE"];

      const result = await request(app.getServer()).get(`${nflPlayersRoute.path}/filter`).send({
        positions: filters,
      });

      expect(result.status).toEqual(200);
      expect(result.body.message).toEqual("filteredPlayers");
    });

    it('response exception', async () => {
      const filters: string[] = ["PG", "SF"];

      const result = await request(app.getServer()).get(`${nflPlayersRoute.path}/filter`).send({
        positions: filters,
      });

      expect(result.status).toEqual(409);
      expect(result.body.message).toEqual("No players match the filters");
    })

    it('response success (not all position need to be valid)', async () => {
      const filters: string[] = ["PG", "QB"];

      const result = await request(app.getServer()).get(`${nflPlayersRoute.path}/filter`).send({
        positions: filters,
      });

      expect(result.status).toEqual(200);
      expect(result.body.message).toEqual("filteredPlayers");
    })
  });
});