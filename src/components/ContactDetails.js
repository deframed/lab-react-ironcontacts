import React from 'react'


function ContactDetails(props) {

    return (

        <div>
            {props.pictureUrl} {props.name} {props.popularity}
            <button onClick={ () => { props.onDelete(props.id) }}>delete</button>


        </div>
    )



}

export default ContactDetails