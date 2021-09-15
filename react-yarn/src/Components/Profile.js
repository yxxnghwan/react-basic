import React from "react";

const Profile = (props)=>{
    const {name, age} = props.data
    return (
        <dl>
            <dt>Name</dt><dd>{name}</dd>
            <dt>Age</dt><dd>{age}</dd>
        </dl>
    )
}

export default Profile;