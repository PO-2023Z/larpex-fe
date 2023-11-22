import React from "react";

interface InvitationButtonViewProps{}

const InvitationButton: React.FC<InvitationButtonViewProps> = () => {


    return (
        <button type="button" className="btn btn-primary">Send Invitation</button>
    );

                
}

export default InvitationButton;