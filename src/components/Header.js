import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton, Drawer, Box } from '@material-ui/core'
import SideBarList from './SideBarList'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '8vh'
    },
    menuBotton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}))

const Header = () => {

    const classes = useStyles()
    const [drawer, setDrawer] = useState(false)

    const toggleDrawer = (open, text) => {
        return (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return 
            }

            console.log(open)
            console.log(text)
    
            setDrawer(open)
        }
    }

    return (
        <Box>
            <AppBar className={classes.root} position='static' color='primary'>
                <ToolBar>
                    <IconButton onClick={toggleDrawer(true, 'IconButton')} edge='start' className={classes.menuBotton} color='inherit' aria-label='menu'>
                        <MenuIcon/>
                    </IconButton>
                    <Drawer anchor={'left'} open={drawer} onClose={toggleDrawer(false, 'Drawer')}>
                        <SideBarList toggleDrawer={toggleDrawer} />
                    </Drawer>
                    <Typography variant='h6' className={classes.title}>
                        The Law of Destiny Data Base
                    </Typography>
                    <Button color='inherit'>
                        Github
                    </Button>
                </ToolBar>
            </AppBar>
        </Box>
    )
}

export default Header