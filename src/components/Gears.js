import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import underConstruction from '../pic/under_construction.jpg'

const Gears = () => {
    return (
        <Box minHeight='84vh'>
            <Container maxWidth='md'>
                <Typography>
                    Gears
                </Typography>
                <img src={underConstruction} alt='underConstruction' />
            </Container>
        </Box>
    )
}

export default Gears