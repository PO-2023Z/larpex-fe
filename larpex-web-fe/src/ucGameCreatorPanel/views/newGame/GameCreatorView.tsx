import GameFormView from "./GameFormView.tsx";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

interface GameCreatorViewProps {
    
}

const GameCreatorView: React.FC<GameCreatorViewProps> = () => {
    const REDIRECT_BUTTON_URL: string = "/game-creator/my-games"
    const navigate = useNavigate();
    const handleRedirect = ()=>{
        navigate(REDIRECT_BUTTON_URL)
    }

    return (
        <>
            <div className="center-text mb-5 mt-3">
                <Button disabled={true} className="mr-2 primary-button">Nowa Gra</Button>
                <Button className="ml-2 primary-button" onClick={handleRedirect}>Moje Gry</Button>
            </div>
        <div>
            <GameFormView/>
        </div>


        </>
    );
}

export default GameCreatorView;