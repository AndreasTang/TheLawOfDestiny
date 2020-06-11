import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Box } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {
        height: '8vh'
    },
    appBar: {
        height: '8vh'
    }
}))

const Bottom = () => {

    const classes = useStyles()

    return (
        <Box>
            <AppBar className={classes.appBar} position='static' color='primary'>
                <Container maxWidth='md'>
                    <ToolBar>
                        <Grid container justify='space-between'>
                            <Grid item>
                                <Typography className={classes.typography} variant='body1' color='inherit'>
                                    遊戲圖片之版權為原版權方所擁有  如有侵犯權益之疑慮  請洽sbandy3131@gmail.com
                                </Typography>
                            </Grid>
                        </Grid>
                    </ToolBar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Bottom