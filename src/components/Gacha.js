import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import underConstruction from '../pic/under_construction.jpg'

const Gacha = () => {
    return (
        <Box minHeight='84vh'>
            <Container maxWidth='md'>
                <Typography>
                    Gacha
                </Typography>
                <img src={underConstruction} alt='underConstruction' />
            </Container>
        </Box>
    )
}

export default Gacha