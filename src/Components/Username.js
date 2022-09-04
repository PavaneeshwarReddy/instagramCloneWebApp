import React, { useState } from 'react'
import { database, auth } from "../Firebase/FirebaseConfig"
import { addDoc, collection ,getDoc,getDocs,query,where} from "firebase/firestore"
import "../CSS/Username.css"
import { async } from '@firebase/util';
function Username() {

    const [username, setUsername] = useState("");
    const [usernameExists, setUsernameExists] = useState(false);
    const usernameSubmit = async () => {

        const allUsersCollection = collection(database, "allUserNames");
        const q =  query(allUsersCollection,where("username","==",username));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot.empty)
        if(querySnapshot.empty==true)
        {
            console.log("No SuchUsername Exixts");
            await addDoc(allUsersCollection,{username:username})
        }
        else
        {
            console.log("SuchUsername Exixts");
            setUsernameExists(true);
        }

       

    }

    return (
        <div className='username'>
            <input type="text" placeholder='username' className='enterUsername' onChange={(e) => { setUsername(e.target.value) }}></input>
            <button className='setUsername' onClick={usernameSubmit}>Set username</button>
        </div>
    )
}

export default Username