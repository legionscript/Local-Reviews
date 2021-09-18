import React from 'react';
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		maginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	}
}))

const Nav = (props) => {
  const classes = useStyles()
  return (
    <>
    	<AppBar postion='static'>
    		<Toolbar>
    			<IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
    				<MenuIcon />
    			</IconButton>
    			<Typography variant='h6' className={classes.title}>
    				Local Reviews
    			</Typography>
    		</Toolbar>
    	</AppBar>
    </>
  )
}

export default Nav;