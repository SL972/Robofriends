import React from "react";

class Card extends React.Component{
    render(){
        return(
            <div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
                <img src={`https://www.robohash.org/${this.props.id}`}></img> 
                <h3>{this.props.name}</h3>
                <p>{this.props.email}</p>
            </div>
        )
    }
}

export default Card