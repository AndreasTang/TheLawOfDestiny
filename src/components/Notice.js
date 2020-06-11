import React from 'react'
import { Container, Typography, Box, Paper, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import backgroundImage from '../pic/狸兮opacity0.2.jpg'

const useStyles = makeStyles(() => ({
    box: {
        backgroundColor: '#d9d9d9',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    container: {
        minHeight: '84vh',
    },
    gridItem: {
        height: '80vh',
        width: '80%',
        padding: '2vh',
        opacity: '1'
    },
    typographyTitle: {
        marginBottom: 20
    },
    typographyLiUp: {
        paddingTop: 20,
        paddingLeft: 20
    },
    typographyLiBottom: {
        paddingBottom: 20,
        paddingLeft: 20
    }
}))

const Notices = () => {

    const classes = useStyles()

    return (
        <Box className={classes.box}>
            <Container className={classes.container} maxWidth='md'>
                <Grid container justify='center' alignItems='center'>
                    <Grid item className={classes.gridItem}>
                            <Typography variant='h3' className={classes.typographyTitle}>
                                歡迎您來到命運的法則資料站
                            </Typography>
                            <Typography variant='h6'>
                                本站目前有些部分還在建構當中
                            </Typography>
                            <Typography variant='h6'>
                                目前可以使用的部分為:
                            </Typography>
                            <Typography className={classes.typographyLiUp}>
                                1.角色資訊的過濾和排序
                            </Typography>
                            <Typography className={classes.typographyLiBottom}>
                                2.角色資料的填寫
                            </Typography>
                            <Typography variant='h6'>
                                我將會盡快完成其他內容
                            </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Notices