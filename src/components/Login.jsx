import { useContext } from "react"
import { Context } from '../index'
import firebase from 'firebase/compat/app';

const Login = () =>{
    const { auth, nukk } = useContext(Context)
    
    const login = async () =>{
        const provider = new firebase.auth.GoogleAuthProvider()

        console.log(provider)

        const {user} = await auth.signInWithPopup(provider)
    }

    console.log(auth)

    return(
        <div>
            Login
            <button onClick={login}>ff</button>
        </div>
    )
}

export default Login