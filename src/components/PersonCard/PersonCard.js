import React from "react";

class PersonCard extends React.Component{

    render(){
        return(
            <div className="card bg-warning text-dark">
                <h4>Ricardo Ortiz</h4>
                <p><b>Edad:</b> 27</p>
                <p><b>Ciudad:</b> Medellín</p>
            </div>
        );
    }
};

export default PersonCard;