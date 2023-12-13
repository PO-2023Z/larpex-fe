import axios from "axios";
import {apiUrl, validJWT} from "../globals/connections.ts";
import {GameModel} from "../ucGameCreatorPanel/viewModels/GameModel.ts";
import {MyGame, MyGamesModel} from "../ucGameCreatorPanel/viewModels/MyGamesModel.ts";

class GameGateway {
    private readonly createGameProposalEndpoint: string = '/CreatorGames/create';
    private readonly getMyGamesEndpoint: string = '/CreatorGames';
    private readonly sendMyGamesEndpoint: string = '/CreatorGames';
    async createGameProposal(game: GameModel): Promise<boolean> {
        try {
            const response = await axios.post<boolean>(
                apiUrl + this.createGameProposalEndpoint,
                {
                    game
                },
                {
                    headers: {
                        Authorization: `Bearer ${validJWT}`,
                    }
                }
            );
            return response.status == 200;
        } catch (error) {
            console.error('Error fetching data:', error);
            return false;
        }
    }

    async getMyGames(): Promise<MyGamesModel>{
        try {
            const response = await axios.get<MyGamesModel>(
                apiUrl + this.getMyGamesEndpoint,
                {
                    headers: {
                        Authorization: `Bearer ${validJWT}`,
                    }
                }
            );
            // console.log(response);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return new class implements MyGamesModel {
                games:MyGame[] = [];
            };
        }
    }

    async sendGameProposal(gameId: string): Promise<boolean> {
        try {
            const response = await axios.post<boolean>(
                apiUrl + this.sendMyGamesEndpoint,
                {
                    gameId
                },
                {
                    headers: {
                        Authorization: `Bearer ${validJWT}`,
                    }
                }
            );
            console.log(response.status == 200);
            return response.status == 200;
        } catch (error) {
            console.error('Error fetching data:', error);
            return false;
        }
    }

}
export default GameGateway;