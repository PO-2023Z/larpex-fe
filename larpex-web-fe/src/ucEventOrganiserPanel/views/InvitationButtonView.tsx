import React from "react";

interface InvitationButtonViewProps{}

const InvitationButton: React.FC<InvitationButtonViewProps> = () => {
    return (
        <button type="button" className="btn btn-primary primary-button ml-1">Zaproś</button>
    );
}

export default InvitationButton;