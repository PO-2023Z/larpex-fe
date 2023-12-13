import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

interface EditGameButtonProps {
    gameId: string;
}
const EditGameButtonView: React.FC<EditGameButtonProps> = ({ gameId }) => {
    const navigate = useNavigate();
    const handleEditGameButtonClick = () => {
        try {
            navigate('/game/'+gameId+"/edit")
        } catch (error) {
            console.log("Unable to navigate to game: " + gameId);
        }
    };
    return (
        <Button className = "ml-2 primary-button" onClick={handleEditGameButtonClick}>Edytuj</Button>
    );
};

export default EditGameButtonView;
