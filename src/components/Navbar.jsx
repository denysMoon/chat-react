import { Context } from '../index'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const NavBar = () => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <AppBar position="static">
            <Toolbar>
                {
                    user ?
                        <Grid container 
                        justify={'space-between'}
                        alignItems={'center'}>
                            <Grid container
                              direction="row"
                              justifyContent="flex-start"
                              alignItems="center"
                              style={{width:'350px'}}>
                                <Avatar src={user.multiFactor.user.photoURL}/>
                                <Typography
                                style={{marginLeft:'10px'}}>
                                    {user.multiFactor.user.displayName}
                                </Typography>
                            </Grid>
                            <Button variant="contained"
                                onClick={() => auth.signOut()}>
                                Log out
                            </Button>
                        </Grid>
                        :
                        <h2>
                            Please.log in
                        </h2>
                }
            </Toolbar>
        </AppBar>
    )
}

export default NavBar