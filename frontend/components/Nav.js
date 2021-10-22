import React, { useState } from 'react';
import { AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useRouter } from 'next/router'
import HomeIcon from '@material-ui/icons/Home'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		maginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	list: {
		minWidth: 200
	}
}))

const Nav = (props) => {
  const classes = useStyles()
  const [toggle, setToggle] = useState(false)
  const router = useRouter()

  const toggleDrawer = (value) => (event) => {
  	if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  		return
  	}

  	setToggle(value)
  }

  return (
    <>
    	<AppBar postion='static'>
    		<Toolbar>
    			<IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu' onClick={toggleDrawer(true)}>
    				<MenuIcon />
    			</IconButton>
    				<Drawer
    					anchor={'left'}
    					open={toggle}
    					onClose={toggleDrawer(!toggle)}
    				>

    				<div className={classes.list}>
    					<List>
    						<ListItem button onClick={() => router.push('/')}>
    							<ListItemIcon><HomeIcon /></ListItemIcon>
    							<ListItemText primary='Home' />
    						</ListItem>
    					</List>
    				</div>
    				</Drawer>
    			<Typography variant='h6' className={classes.title}>
    				Local Reviews
    			</Typography>
    		</Toolbar>
    	</AppBar>
    </>
  )
}

export default Nav;