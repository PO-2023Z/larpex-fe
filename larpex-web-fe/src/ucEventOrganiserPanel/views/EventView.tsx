import React from "react";

interface EventViewProps {
    name:string;
    desc:string;
    id:string;
 }



 const EventView: React.FC<EventViewProps> = (EventViewProps) => {
    return (
        <div>
            <div></div>
            <div>
                <h4>{EventViewProps.name}
                {EventViewProps.desc}
                {EventViewProps.id}</h4>
                <br></br>
            </div>
        </div>
    );
} 

export default EventView;