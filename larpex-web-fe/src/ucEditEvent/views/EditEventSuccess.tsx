import { useNavigate } from "react-router-dom";

interface EditEvenSuccesstPageProps {}

const EditEventSuccessPage: React.FC<EditEvenSuccesstPageProps> = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Pomyslnie zaktualizowano wydarzenie</h2>
            <button className="create-button" onClick={() => navigate("/events-organiser-panel")}>
                OK
            </button>
        </div>
    );
}

export default EditEventSuccessPage;