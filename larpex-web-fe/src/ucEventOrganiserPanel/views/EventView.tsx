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
                <h5>{EventViewProps.name}  |  {EventViewProps.desc}  | {EventViewProps.id}  <InvitationButtonView/> <EditEventButtonView/></h5>
            </div>
        </div>
    );
} 

export default EventView;