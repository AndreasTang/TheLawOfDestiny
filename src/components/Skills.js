import React from 'react'
import { Container, Typography, Box } from '@material-ui/core'
import underConstruction from '../pic/under_construction.jpg'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        minHeight: '85vh',
    },
    container: {
        minHeight: '85vh'
    }
}))

const Skills = () => {

    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Container className={classes.container} maxWidth='md'>
                <Typography>
                    Skills
                </Typography>
                <img src={underConstruction} alt='underConstruction' />
            </Container>
        </Box>
    )
}

export default Skills