import React from "react";
import {GameDto} from "../viewModels/GameViewModel.ts";
import SendGameButtonView from "./SendGameButtonView.tsx"
import CorrectionButtonView from "./CorrectionButtonView.tsx"

import "./GameFormView.css";

interface GameFormViewProps {
    
}

const GameFormView: React.FC<GameFormViewProps> = () => {

    return (
        <>
            
            <div>
                <form>
                    <label>
                        Nazwa
                        <input type="text" name="gameName" />
                    </label><br/>
                    <label>
                        Id twórcy:
                        <input type="text" name="ownerId" />
                    </label><br/>
                    <label>
                        Maxymalna liczba Graczy:
                        <input type="text" name="maximumPlayers" />
                    </label><br/>
                    <label>
                        Poziom Trudności:
                        <input type="text" name="difficulty" />
                    </label><br/>
                    <label>
                        Opis:
                        <textarea name="description" />
                    </label><br/>
                    <label>
                        Mapa:
                        <input type="text" name="map" />
                    </label><br/>
                    <label>
                        Scenariusz:
                        <input type="text" name="scenario" />
                    </label><br/>
                    <CorrectionButtonView/>
                    <SendGameButtonView/>
                </form>
            </div>
        </>
    );


}

export default GameFormView;