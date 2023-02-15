import { Box, AppBar, IconButton, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from "react";
import {styled} from "@mui/system";
import styles from './Navbar.module.css'
import { useRouter } from "next/router";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const router = useRouter()

  const toggleDrawer = (value) => (event) => {
    if (event.type === 'keydown' && (event.key ==='Tab' || event.key ==='Shift')){
      return
    }
    setToggle(value)
  }
 
  return (
   <NavbarStyled>
    <Box sx={{ flexGrow: 1 }}>
          <AppBar position='static'>
    		    <Toolbar>
    			    <IconButton edge='start' className='menuButton' color='inherit' aria-label='menu' onClick={toggleDrawer(true)}>
    				    <MenuIcon />
    			    </IconButton>
    				  <Drawer
    					  anchor={'left'}
    					  open={toggle}
    					  onClose={toggleDrawer(!toggle)}
    				  >
    				    <div className='list'>
    					    <List >
    						    <ListItem onClick={() => router.push('/')}>
    							    <ListItemIcon><HomeIcon /></ListItemIcon>
    							    <ListItemText primary='Home' />
    						    </ListItem>
    					    </List>
    				    </div>
    				  </Drawer>
    			    <Typography variant='h6' className='title'>
    				  Welcome User
    			    </Typography>
              <Button className={styles.button} color="inherit">Login</Button>
    		    </Toolbar>
    	    </AppBar>
        </Box>
   </NavbarStyled>
 );
}

const NavbarStyled = styled('Navbar')({
  ".list":{
    minWidth: '400px'
  },
})

export default Navbar