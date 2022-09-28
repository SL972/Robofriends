import React from "react";
import Card from './Card.js'
import '../index.css'

const CardList= ({robots10}) =>{
    return(
        <div>
            {
                robots10.map( (user,i) => {
                    return <Card key={robots10[i].id} id={robots10[i].id} name = {robots10[i].name} email={robots10[i].email}  />
                } )
            }
        </div>
    )
}

export default CardList