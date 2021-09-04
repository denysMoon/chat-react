import { useContext } from "react"
import { Context } from '../index'
import firebase from 'firebase/compat/app';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '275px',
      height: '150px',
      background: 'red'
    }
  });

const Login = () =>{
    const classes = useStyles();
    const { auth } = useContext(Context)
    
    const login = async () =>{
        const provider = new firebase.auth.GoogleAuthProvider()

        console.log(provider)

        const {user} = await auth.signInWithPopup(provider)
    }

    console.log(auth)

    return(
        <div className="card-container">
            <Card className={classes.root}>
                <CardContent>
                    <Button variant="contained"
                    onClick={login} >
                        Login with Google
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login