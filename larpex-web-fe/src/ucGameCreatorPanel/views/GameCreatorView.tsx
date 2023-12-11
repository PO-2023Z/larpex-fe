import GameFormView from "./GameFormView.tsx";
import {GameDto} from "../viewModels/GameViewModel.ts";

interface GameCreatorViewProps {
    
}

const GameCreatorView: React.FC<GameCreatorViewProps> = () => {

    return (
        <>
        <div className="organiser-panel-title"><h1>Utwórz propozycje Gry</h1></div>
        <div>
            <GameFormView/>
        </div>


        </>
    );
}

export default GameCreatorView;