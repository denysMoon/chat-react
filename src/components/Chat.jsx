import { useContext, useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Context } from "../index"
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from "firebase/compat";
import { Container, Grid, Button, TextField, Avatar } from '@material-ui/core'


const Chat = () =>{
    // const [messageItem, setMessageItem] = useState([])
    const [value, setValue] = useState('')
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [messages, loading] = useCollectionData(
        firestore.collection('message').orderBy('createdAt')
    )

    // useEffect( async ()=>{
    //     await setMessageItem(messages)
    // }, [])

    // console.log(messageItem)

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

    return(
        // <div className="content">
        //     Chat
        //     <div>
        //         {
        //            !messages ?  'no' : messages.map(el=><h2>{el.displayName}:{el.text}</h2>)
        //         }
        //     </div>
        //     <div>
        //         {/* <form onSubmite={sendMessage}> */}
        //         <input type="text" value={value} onChange={onChange} />
        //             <button onClick={sendMessage}>send</button>
        //         {/* </form> */}
        //     </div>
        // </div>
        <Container>
            <Grid container
            justify={"center"}
            style={{height: window.innerHeight - 50, marginTop: '10px'}}>
                <div style={{width: '80%', height: '70vh',
                 border: '1px solid black', overflowY: 'auto'}}>
                    {
                     !messages ?  'no' : messages.map(el=>
                        <div>
                             <Grid container>
                                <Avatar src={el.photoURL} />
                                <div>
                                    {el.displayName}
                                </div>
                             </Grid>
                             <div>
                                {el.text}
                             </div>
                         </div> 
                     )
                    }

                </div>
                <Grid container
                direction={'column'}
                alignItems={'flex-end'}
                style={{width: '80%'}}>
                    {/* <input type="text" value={value} onChange={onChange} /> */}
                    <TextField fullWidth
                    rowsMax={2}
                    variant={'outlined'}
                    value={value}
                    onChange={onChange}/>

                    <Button onClick={sendMessage}
                    variant={'outlined'}>Send</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Chat