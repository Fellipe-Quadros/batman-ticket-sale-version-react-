import React, { useContext, useState } from "react";
import { UserContext, UserStore } from "../../contexts/Usercontext";


function Profile(){
    const {login, setLogin} = useContext(UserContext)

    return(
       
        <div>{login ? 'Esses sao seus dados' : 'realize o login para ver'}</div>
        
    )
}

export default Profile;