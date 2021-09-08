import { useContext, useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Context } from "../index"
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from "firebase/compat";
import { Container, Grid, Button, TextField, Typography } from '@material-ui/core'
import moment from 'moment'

import catFace from '../assets/smiles/cat-face.png'


const Chat = () =>{
    const [value, setValue] = useState('')
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [messages, loading] = useCollectionData(
        firestore.collection('message').orderBy('createdAt')
    )

    const onChange = e => {
        const message = e.target.value
        setValue(message)
    }

    const sendMessage = async () => {
        await firestore.collection('message').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            time: moment().format('h:mm:ss a'),
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    return(
        <Container>
            <Grid container
            justify={"center"}
            style={{height: window.innerHeight - 50, marginTop: '10px'}}>
                <div style={{width: '80%', height: '70vh',
                 border: '1px solid black', overflowY: 'auto'}}>
                    {
                     !messages ?  'no' : messages.map(el=>
                        <div>
                             <Grid container
                             style={{padding:'2px 4px'}}>
                                <div>
                                    {el.time} <b>{el.displayName}</b>: {el.text}
                                </div>
                             </Grid>
                         </div> 
                     )
                    }
                </div>
                <Grid container
                direction={'column'}
                alignItems={'flex-end'}
                style={{width: '80%'}}>
                    <TextField fullWidth
                    rowsMax={2}
                    variant={'outlined'}
                    value={value}
                    onChange={onChange}/>
                    <Grid container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center">
                        <Typography style={{marginRight:'5px'}}>
                            {/* <img src={catFace} 
                            style={{cursor:'pointer'}}
                            onClick={addEmoji}/> */}
                            list of emoji
                        </Typography>
                        <Button onClick={sendMessage}
                        variant={'outlined'}
                        style={{marginTop:'5px'}}>Send
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Chat