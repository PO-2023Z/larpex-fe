import React from "react";
import {useNavigate} from "react-router-dom";

interface EditEventButtonViewProps {
}

interface EditEventButtonViewProps {
    eventId: string;
}

const EditEventButtonView: React.FC<EditEventButtonViewProps> = (props) => {
    const navigate = useNavigate();
    function navigateToEditEvent() {
        navigate("/events/" + props.eventId);
    }
    return (
        <button type="button" className="btn btn-primary primary-button ml-1" onClick={navigateToEditEvent}>Edytuj</button>
    );
}

export default EditEventButtonView;