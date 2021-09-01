import {Context} from '../index'
import {useAuthState} from 'react-firebase-hooks/auth'
import {LOGIN_ROUTE} from '../utils/consts'
import { NavLink } from 'react-router-dom'
import {useContext} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

const NavBar = () =>{
    const {auth} = useContext(Context) 
    const [user] = useAuthState(auth)
    return(
        <div>
            <AppBar position="static">
                {
                    user ?
                    <Button variant="contained" 
                    color="primary"
                    onClick={()=>auth.signOut()}>
                        Log out
                    </Button>
                    :
                    <h2>
                        Please.log in
                    </h2>
                    // <NavLink to={LOGIN_ROUTE}>
                    //     <Button variant="contained" 
                    //     color="primary">
                    //         Log in
                    //     </Button>
                    // </NavLink>
                    
                }
            </AppBar>
        </div>
    )
}

export default NavBar