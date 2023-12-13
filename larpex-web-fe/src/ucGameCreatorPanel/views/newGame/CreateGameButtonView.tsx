import React from "react";
import {GameModel} from "../../viewModels/GameModel.ts";
import {createGame} from "../../logic/GameService.ts";
import {useNavigate} from "react-router-dom";

interface SendGameButtonViewProps{
    createGameDto: CallbackFunction;
}

type CallbackFunction = () => GameModel;

const CreateGameButtonView: React.FC<SendGameButtonViewProps> = ({createGameDto}) => {

    const REDIRECT_BUTTON_URL: string = "/game-creator/my-games"
    const navigate = useNavigate();

    function validString(str: string){
        return str!="";
    }
    function validNum(num:number){
        return num >= 0;
    }

    const validate = (game: GameModel) => {
        return validString(game.description) && validString(game.gameName) &&
            validString(game.mapUrl) && validString(game.scenario) &&
            validNum(game.difficulty) && validNum(game.maximumPlayers);
    }
    const trySendData = async () => {
        const game = createGameDto()
        console.log("GAME")
        console.log(game)
        if(!validate(game)){
            alert("Problem z danymi. Wszystkie pola muszą być poprawnie uzupełnione!");
            return;
        }
        try {
            const response = await createGame(game);
            if(response){
                navigate(REDIRECT_BUTTON_URL);
            }else{
                alert("Wystąpił problem podczas przesyłu danych.")
            }
        } catch (error) {
            console.error("Error:", error);
        }

    }

    return (
        <button type="button" className="btn btn-primary primary-button ml-1" onClick={trySendData}>Stwórz</button>
    );
}

export default CreateGameButtonView;