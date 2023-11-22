import React from "react";
import InvitationButtonView from "./InvitationButtonView.tsx";
import EditEventButtonView from "./EditEventButtonView.tsx";

interface EventViewProps {
    name:string;
    desc:string;
    id:string;
 }



 const EventView: React.FC<EventViewProps> = (EventViewProps) => {


    
    return (
        
        <div>
            <div>
                <h5><span className="d-inline-block text-truncate" style={{width: 30}}>{EventViewProps.id}</span> <span className="d-inline-block text-truncate" style={{width: 100}}>{EventViewProps.name}</span>   <span className="d-inline-block text-truncate" style={{width: 1000}}>{EventViewProps.desc}</span>     <InvitationButtonView/> <EditEventButtonView/></h5>
            </div>
        </div>
    );
} 

export default EventView;