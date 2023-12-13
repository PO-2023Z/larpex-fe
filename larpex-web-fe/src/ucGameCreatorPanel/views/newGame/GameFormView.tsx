import React, {useState} from "react";
import {GameModel} from "../../viewModels/GameModel.ts";
import CreateGameButtonView from "./CreateGameButtonView.tsx"


import "./GameFormView.css";

interface GameFormViewProps {

}

const GameFormView: React.FC<GameFormViewProps> = () => {


    const [gameName, setGameName] = useState<string | null>(null);;
    const [maximumPlayers, setMaximumPlayers] = useState<string | null>(null);;
    const [difficulty, setDifficulty] = useState<string | null>(null);;
    const [mapUrl, setMapUrl] = useState<string | null>(null);;
    const [description, setDescription] = useState<string | null>(null);;
    const [scenario, setScenario] = useState<string | null>(null);;

    function isProperNumber(str:string) {
        return !isNaN(parseFloat(str)) && !isNaN(parseInt(str)) && !((parseInt(str) < 0))
            && str.indexOf(".") == -1 && str.indexOf(",") == -1
    }

    function isInDifficultyRange(str:string){
        return parseInt(str) >= 0 && parseInt(str) <= 10;
    }

    function isInMaxPlayersRange(str: string){
        return parseInt(str) > 0;
    }
    const createGameDto = ():GameModel =>{
        let finalMaxPlayers = -1;
        if(maximumPlayers != undefined && isProperNumber(maximumPlayers) && isInMaxPlayersRange(maximumPlayers)){
            finalMaxPlayers = parseInt(maximumPlayers);
        }

        let finalDiff = -1;
        if(difficulty != undefined && isProperNumber(difficulty) && isInDifficultyRange(difficulty)){
            finalDiff = parseInt(difficulty);
        }
        return {
            gameName: gameName ? gameName : "",
            maximumPlayers: finalMaxPlayers,
            difficulty: finalDiff,
            description: description ? description : "",
            mapUrl: mapUrl ? mapUrl : "",
            scenario: scenario ? scenario : ""
        }
    }

    return (
        <>
                <table className="centered-table">
                    <tbody>
                    <tr>
                        <td className="new-form">Nazwa gry:</td>
                        <td className="new-form"><input className="width-form" type="text" id="gameName"
                                                        onChange={(e)=> setGameName(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td className="new-form">Maks. ilość graczy (min 1):</td>
                        <td className="new-form"><input className="width-form" type="text" id="maximumPlayers"
                                                        onChange={(e)=> setMaximumPlayers(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td className="new-form">Trudność (0-10):</td>
                        <td className="new-form"><input className="width-form" type="text" id="difficulty"
                                                        onChange={(e)=> setDifficulty(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td className="new-form">Link do mapy:</td>
                        <td className="new-form"><input className="width-form" type="text" id="mapUrl"
                                                        onChange={(e)=> setMapUrl(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td className="new-form">Opis:</td>
                        <td className="new-form"><textarea className="width-form wider-text-area" id="description"
                                                           onChange={(e)=> setDescription(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td className="new-form">Scenariusz:</td>
                        <td className="new-form"><textarea className="width-form wider-text-area" id="scenario"
                                                           onChange={(e)=> setScenario(e.target.value)}/></td>
                    </tr>
                    </tbody>
                </table>
                <div className="mt-5 text-center">
                    <CreateGameButtonView createGameDto={createGameDto}/>
                </div>

        </>
    );


}

export default GameFormView;