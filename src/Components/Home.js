import React, { useEffect, useState } from 'react'
import { auth, database } from "../Firebase/FirebaseConfig"
import AllDetailsEntry from "../Components/AllDetailsEntering"
import { getDocs, collection, doc,getDoc, updateDoc,query,where} from "firebase/firestore"
import "../CSS/Home.css"
import { async } from '@firebase/util'

function Home() {
  const [allUsersDetails, addallUsersDetails] = useState([])

  const loadArray = () => {
    const allUsers = collection(database, "allUserDetails");

    getDocs(allUsers).then((dataSnapshot) => {
      console.log("Fetched")
      const temp = []
      dataSnapshot.forEach((username) => {
        temp.push(username.data().username);
      })
      addallUsersDetails(temp)


    })
  }


  const addRequest = (userName) => {
    var id="";
    const allUsers = collection(database, "allUserDetails");
    const q = query(allUsers,where("username","==",userName))
    getDocs(q).then((docId)=>{
          docId.forEach((ele)=>{
            id = ele.id;
            console.log(id)
          })
          const ref = doc(database, "allUserDetails", id);
          updateDoc(ref,{
            username  :"pavaneeshwar"
          }).then(()=>{
            console.log("Username Updated")
          })
    })
   



  }

  return (
    <div className='home'>
      <button onClick={loadArray}>Load array</button>
      <button onClick={addRequest}>addd</button>
      <div>
        {
          allUsersDetails.map((username) => {
            return (
              <div>
                <h1>{username}</h1>
                <button onClick={() => { addRequest(username) }}>Send Request</button>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}

export default Home 