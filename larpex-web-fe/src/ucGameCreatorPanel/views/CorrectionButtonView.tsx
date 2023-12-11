import React from "react";
import {useNavigate} from "react-router-dom";

interface CorrectionButtonViewProps {
}

interface CorrectionButtonViewProps {

}

const CorrectionButtonView: React.FC<CorrectionButtonViewProps> = (props) => {
    const navigate = useNavigate();
    return (
        <button type="button" className="btn btn-primary primary-button ml-1">Korekta</button>
    );
}

export default CorrectionButtonView;