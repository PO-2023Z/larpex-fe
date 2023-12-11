import React from "react";
import {useNavigate} from "react-router-dom";

interface SendGameButtonViewProps{}



const SendGameButtonView: React.FC<SendGameButtonViewProps> = (props) => {
    const navigate = useNavigate();
    return (
        <button type="button" className="btn btn-primary primary-button ml-1">Wysli</button>
    );
}

export default SendGameButtonView;