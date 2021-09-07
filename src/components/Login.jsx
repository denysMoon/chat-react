import { useContext } from "react"
import { Context } from '../index'
import firebase from 'firebase/compat/app';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
      height: '150px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
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
        <Container>
            <Grid style={{height: window.innerHeight/2}}
              container
              direction="row"
              justifyContent="center"
              alignItems="center">
                <Grid
                 style={{width: 400, background: 'lightgray'}}
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" >
                    <Box p={5}>
                        <Button variant={"contained"}
                        size="large"
                            onClick={login} >
                            Login with Google
                            <ArrowForwardIcon />
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login