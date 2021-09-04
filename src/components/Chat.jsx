import { useContext, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Context } from "../index"
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from "firebase/compat";


const Chat = () =>{
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('message').orderBy('createdAt')
    )

    const onChange = e => {
        const message = e.target.value
        setValue(message)
    }

    const sendMessage = async () => {
        // e.preventDefault()
        await firestore.collection('message').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    console.log(messages)

    return(
        <div className="content">
            Chat
            <div>
                {
                    messages == 'undefined'  ?  'no' : messages.map(el=><div>{el.text}</div>)
                }
            </div>
            <div>
                {/* <form onSubmite={sendMessage}> */}
                <input type="text" value={value} onChange={onChange} />
                    <button onClick={sendMessage}>send</button>
                {/* </form> */}
            </div>
        </div>
    )
}

export default Chat