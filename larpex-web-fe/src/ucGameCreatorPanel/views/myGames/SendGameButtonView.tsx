import {Button} from "react-bootstrap";
import SendGameResultModalView from "./SendGameResultModalView.tsx";
import {useState} from "react";
import {sendGame} from "../../logic/GameService.ts";

interface SendGameButtonProps {
    gameId: string;
}

const SendGameButtonView: React.FC<SendGameButtonProps> = ({gameId}) => {
    const [state, setState] = useState(false);
    const [result, setResult] = useState(false);
    const closeModal = () => {
        setState(false)
    }

    const handleSendGameButtonClick = async () => {
        try {
            const response = await sendGame(gameId);
            setResult(response);
            setState(true);
        } catch (error) {
            console.error("Error while sending game:", error);
        }
    };

    return (
        <>

            <Button className="mr-2 ml-3 primary-button" onClick={handleSendGameButtonClick}>Prześlij grę</Button>
            <SendGameResultModalView show={state} closeModal={closeModal} contentPredicate={result}></SendGameResultModalView>
        </>
    );
};

export default SendGameButtonView;
